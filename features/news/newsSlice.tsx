// features/news/newsSlice.ts
import { getPosts } from '@/lib/data';
import { BlogPost } from '@/typings';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


interface NewsState {
  news: BlogPost[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

export const fetchBlogs = createAsyncThunk('news/fetchBlogs', async () => {
  const response = await getPosts();
  console.log(`Reducer news: ${response}}`)
  return response;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<BlogPost[]>) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch news';
      });
  },
});

export default newsSlice.reducer;