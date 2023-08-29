// store.js
import { configureStore } from "@reduxjs/toolkit";
// import someReducer from './reducers/someReducer';

const store = configureStore({
    reducer: {
        // someReducer: someReducer,
    },
});

export default store;
