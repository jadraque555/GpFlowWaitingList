// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducers';  // Assuming you have a combined reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
