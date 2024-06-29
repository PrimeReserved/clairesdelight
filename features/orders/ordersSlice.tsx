// features/products/ordersSlice.ts
import { getAllPaystackTransaction } from '@/lib/admin/actions';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


interface OrdersState {
  transactions: any[];
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  transactions: [],
  loading: false,
  error: null
}

export const fetchPaystackTransactions = createAsyncThunk('orders/fetchTransactions', async () => {
  const response = await getAllPaystackTransaction();
  console.log(`Reducer orders: ${response ? 'okay' : 'no response'}`)
  return response;
});

const ordersSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaystackTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPaystackTransactions.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchPaystackTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch products';
      });
  },
});



export default ordersSlice.reducer;
