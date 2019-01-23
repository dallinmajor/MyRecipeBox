import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import categoriesReducer from './categories_reducer';
import recipes_reducer from './recipes_reducer';
import viewRecuder from './view_reducer';
import recipeDisplayReducer from './recipe_display_reducer';

const rootReducer = combineReducers({
  user: userReducer,
  recipes: recipes_reducer,
  categories: categoriesReducer,
  view: viewRecuder,
  recipeOnDisplay: recipeDisplayReducer
});

export default rootReducer;
