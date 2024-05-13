import React from 'react';
import '@mantine/core/styles.css';

import './index.scss';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './app/app';
import theme from './theme';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <MantineProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>,
);
