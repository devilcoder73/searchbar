import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchReducer';

// refer https://redux-toolkit.js.org/usage/usage-guide#store-setup for implementation details
export const store = configureStore({
  reducer: {
    gigs: searchReducer
  },
});

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import rootReducer from './reducers';

// const middleware = [thunk];
// const initialState = {};

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;