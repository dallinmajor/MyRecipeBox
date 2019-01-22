import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import categoriesReducer from './categories_reducer';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  view: null,
  recipeOnDisplay: null
});

export default rootReducer;
