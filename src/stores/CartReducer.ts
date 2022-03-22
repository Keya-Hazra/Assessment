import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ICartReducer {
  cart: IProduct[];
}

const initialState: ICartReducer = {
  cart: [
    {
      id: 19,
      title: 'string',
      price: 19,
      description: 'string',
      category: 'string',
      image: 'string',
      rating: {
        rate: 19,
        count: 19,
      },
    },
  ],
};

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCartAction: (state: ICartReducer, action: PayloadAction<IProduct>) => {
      state.cart = [...state.cart, action.payload];
      return state;
    },
  },
});

export const { addToCartAction } = cartReducer.actions;

export default cartReducer.reducer;