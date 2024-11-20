import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductType = {
  additionalDetails: any;
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  images: string[];
};

interface ProductState {
  selectedProduct: ProductType | null;
}

const initialState: ProductState = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<ProductType>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
