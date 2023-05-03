import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
const store = setupStore();

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

