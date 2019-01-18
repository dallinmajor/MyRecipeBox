import { combineReducers } from 'redux';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  user: userReducer,
  categories: ['Salads','Soups','Cookies','Pizza','Deserts']
});

export default rootReducer;
