import { combineReducers } from 'redux';
import contacts from './contacts';
import filterKeyword from './filterKeyword';

export default combineReducers({
  contacts,
  filterKeyword
});
