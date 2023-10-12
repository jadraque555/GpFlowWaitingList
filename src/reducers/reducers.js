import { combineReducers } from 'redux';
import waitingListReducer from './waitingListReducer';  // Adjust the import path based on your project structure
import selectionReducer from './selectionReducer';

const rootReducer = combineReducers({
  waitingList: waitingListReducer,
  selection: selectionReducer,
  // Add more reducers as needed
});

export default rootReducer;
