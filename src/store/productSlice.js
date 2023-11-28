import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/statusCode";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  /*
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
  */
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

/*
export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();

    dispatch(fetchProducts(data));
  };
}
*/

export const getProducts = createAsyncThunk("product/get", async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();

  return data;
});
