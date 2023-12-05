// App.js
import React from 'react';
import { ProductProvider } from './component/ProductContext';
import ProductList from './component/ProductList';

const App = () => {
  return (
    <ProductProvider>
      <div>
        <h1>Product List</h1>
        <ProductList />
      </div>
    </ProductProvider>
  );
};

export default App;
