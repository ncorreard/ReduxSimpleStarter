import { combineReducers } from 'redux';
import BooksReducer from './reducer-books'
import ActiveBookReducer from './reducer-active-book'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
