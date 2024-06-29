// features/products/productsSlice.ts
import { filterProducts } from '@/helper/filterProducts';
import { sortProducts } from '@/helper/sortProducts';
import { getProduct } from '@/lib/data';
import { Product } from '@/typings';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';


interface ProductsState {
  products: Product[];
  filterCategoryMap: Record<string, Product[]>;
  searchResults: Product[],
  searchTerm: string;
  loading: boolean;
  error: string | null;
  filterCategory: string;
  sortOption: string;
}

const initialState: ProductsState = {
  products: [],
  filterCategoryMap: {}, 
  searchResults: [],
  searchTerm: '',
  loading: false,
  error: null,
  filterCategory: 'All',
  sortOption: 'Recently Added',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await getProduct();
  console.log(`Reducer products: ${response ? 'okay' : 'no response'}`)
  return response;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<Product[]>) => {
      state.searchResults = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    updateSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      const fuse = new Fuse(state.products, { keys: ['name'] }); // Assuming 'name' is the search key in Product
      const results = fuse.search(state.searchTerm).map((result) => result.item);
      state.searchResults = results;
    },
    setFilterCategory: (state, action: PayloadAction<'All' | 'Mixed spices' | 'Single Spices'>) => {
      state.filterCategory = action.payload;
      filterProducts(state);
    },
    setSortOption: (state, action: PayloadAction<'Recently Added' | 'Best Selling' | 'Alphabetically A-Z' | 'Alphabetically Z-A'>) => {
      state.sortOption = action.payload;
      sortProducts(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
        filterProducts(state); // Apply initial filtering
        sortProducts(state);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch products';
      });
  },
});

export const {
  setProducts,
  setSearchResults,
  setSearchTerm,
  setFilterCategory,
  setSortOption,
  updateSearchTerm,
} = productsSlice.actions;

export default productsSlice.reducer;
