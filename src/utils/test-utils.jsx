/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { LyricsServiceApi } from '../service/LyricsServiceApi';

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        [LyricsServiceApi.reducerPath]: LyricsServiceApi.reducer,
      },
      // eslint-disable-next-line max-len
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LyricsServiceApi.middleware),
    }),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  const Wrapper = function ({ children }) {
    return <Provider store={store}>{children}</Provider>;
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
