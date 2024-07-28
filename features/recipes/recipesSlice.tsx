// features/recipes/recipesSlice.ts
import { getRecipes } from '@/lib/data';
import { Recipe } from '@/typings';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
};

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await getRecipes();
  console.log(`Reducer Recipes: ${response ? 'success' : 'failed'}`)
  return response;
});

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch recipes';
      });
  },
});

export default recipesSlice.reducer;
