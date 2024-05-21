import React from 'react';
import '@mantine/core/styles.css';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './app/app';
import Movies from './app/pages/movies/movies';
import PageNotFound from './app/pages/page-not-found/page-not-found';
import RatedMovies from './app/pages/rated-movies/rated-movies';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: 'rated',
        element: <RatedMovies />,
      },
    ],
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <MantineProvider theme={theme}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </MantineProvider>
  </Provider>,
);
