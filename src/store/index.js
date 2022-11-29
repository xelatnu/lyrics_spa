import { configureStore } from '@reduxjs/toolkit';
import { LyricsServiceApi } from '../service/LyricsServiceApi';

const store = configureStore({
  reducer: {
    [LyricsServiceApi.reducerPath]: LyricsServiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LyricsServiceApi.middleware),
});

export default store;
