// cartSlice.ts (or cartSlice.js)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'), 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items)); 
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item: { id: number; }) => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items)); 
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cartItems'); 
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
