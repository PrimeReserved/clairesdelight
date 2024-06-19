// features/cart/cartSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '@/typings';

interface CartState {
  cartItems: CartItem[];
  cartTotal: number;
  cartCount: number;
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
  loading: false,
  error: null,
};

const updateCartTotals = (state: CartState) => {
    state.cartTotal = state.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    state.cartCount = state.cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  

export const addToCart = createAsyncThunk('cart/addToCart', async (product: Product) => {
  // logic to add product to cart
  return product;
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId: string) => {
  // logic to remove product from cart
  return productId;
});

const updateLocalStorage = (items: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartLocal: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.product._id === product._id
      );

      if (existingCartItemIndex !== -1) {
        state.cartItems[existingCartItemIndex].quantity += 1;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }

      updateLocalStorage(state.cartItems);
      updateCartTotals(state);
    },
    removeFromCartLocal: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.product._id !== productId);

      updateLocalStorage(state.cartItems);
      updateCartTotals(state);
    },
    updateCartItemQuantityLocal: (state, action: PayloadAction<{ productId: string, quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.product._id === productId
      );

      if (existingCartItemIndex !== -1) {
        state.cartItems[existingCartItemIndex].quantity = quantity;
        updateLocalStorage(state.cartItems);
        updateCartTotals(state);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        const product = action.payload;
        const existingCartItemIndex = state.cartItems.findIndex(
          (item) => item.product._id === product._id
        );

        if (existingCartItemIndex !== -1) {
          state.cartItems[existingCartItemIndex].quantity += 1;
        } else {
          state.cartItems.push({ product, quantity: 1 });
        }

        updateLocalStorage(state.cartItems);
        updateCartTotals(state);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to add product to cart';
      })
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.cartItems = state.cartItems.filter((item) => item.product._id !== action.payload);

        updateLocalStorage(state.cartItems);
        updateCartTotals(state);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to remove product from cart';
      });
  },
});

export const {
  addToCartLocal,
  removeFromCartLocal,
  updateCartItemQuantityLocal
} = cartSlice.actions;

export default cartSlice.reducer;
