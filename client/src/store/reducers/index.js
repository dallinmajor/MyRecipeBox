import { combineReducers } from 'redux';
import userRecipes from './recipes_reducer';
import userCategories from './categories_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    user: userReducer,
    categories: userCategories,
    recipes: userRecipes
});

export default rootReducer;