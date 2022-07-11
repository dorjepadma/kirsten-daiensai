import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Context/cart.context';

import { UserProvider } from './Context/user.context';
import { ProductsProvider} from './Context/products.context';
import App from './App';
import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
      <BrowserRouter>
        <UserProvider >
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,
  rootElement
);


