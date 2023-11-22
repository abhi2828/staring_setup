import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';

// Use lazy to import the components asynchronously
const App = lazy(() => import('./App.jsx'));
const LoadingFallback = () => <div>Loading...</div>;

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
