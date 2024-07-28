import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getCustomerReview } from '@/lib/data';


interface ReviewsState {
  reviews: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ReviewsState = {
  reviews: [],
  loading: false,
  error: null,
};

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
  const response = await getCustomerReview();
  return response;
});

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch reviews';
      });
  },
});

export default reviewsSlice.reducer;
