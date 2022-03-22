import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ICart{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate:number;
      count: number;
    }
  }  

interface  ICartReducer {
  cart?: ICart[];

}

const initialState: ICartReducer = {cart:[]};

 const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCartAction: (state, action: PayloadAction<ICart>) => {
      
 const newProduct: ICart = {
    id: action.payload.id,
    title: action.payload.title,
    price: action.payload.price,
    description: action.payload.description,
    category: action.payload.category,
    image: action.payload.image,
    rating: {
      rate:action.payload.rating.rate,
      count:action.payload.rating.count,
    }
  };
      return {
        ...state,
        // cart: state.cart.push(newProduct),
        cart: action.payload,
      };
    },
  
  
  },
});

export const { addToCartAction } = cartReducer.actions;

export default cartReducer.reducer;
