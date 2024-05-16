import Banner from './components/Banner';
import Cart from './components/Cart';
import Header from './components/Header';
import './style.css';
import products from './data/products';
import { useState } from 'react';
import IProduct from './models/Product';

const App: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>(products);

  const handleAmountChange = (index: number, amount: number) => {
    const newProducts = [...cartProducts];
    newProducts[index].amount = amount;
    setCartProducts(newProducts);
  };

  let totalCount = cartProducts.reduce(
    (total, product) => total + product.amount,
    0,
  );

  // let totalPrice = 0;
  // cartProducts.forEach(
  //   (product) => (totalPrice += product.amount * product.price),
  // );

  let totalPrice = cartProducts.reduce(
    (total, product) => total + product.amount * product.price,
    0,
  );

  return (
    <div className="container">
      <Header totalPrice={totalPrice} />
      <Banner />
      <Cart
        products={products}
        onAmountChange={handleAmountChange}
        totalAmount={totalCount}
      />
    </div>
  );
};

export default App;
