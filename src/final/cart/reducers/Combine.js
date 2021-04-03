import { combineReducers } from 'redux';

import AddItemReducer from './CartSystem';
import AddToCartReducer from './AddToCart';

const AllReducers = combineReducers({
	AddItemReducer,
	AddToCartReducer
})

export default AllReducers;
