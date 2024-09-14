import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'; // Default localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import todoReducer from './TodSlice'; // Import the todo reducer

// Root reducer combining all your reducers
const rootReducer = combineReducers({
  todo: todoReducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for actions like REHYDRATE
    }),
});

export const persistor = persistStore(store);
export default store;
