import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './Modal/modal-slice';
import { 
  persistStore, 
  persistReducer, 
  FLUSH, 
  REHYDRATE, 
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const modalPersistConfig = {
  key: "modal",
  storage,
  whitelist: [
    // "aboutPictureData",
    // 'isEducationModal',
    // ' isPortfolioModal'
  ]
}


const rootReducer = combineReducers({
  modal: persistReducer(modalPersistConfig, modalReducer),
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);