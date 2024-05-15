import IProduct from "../../models/Product";
import CartItem from "../CartItem";
import './style.css';

const products: IProduct[] = [
  {
    name: 'Hrad z kostek',
    price: 450,
    amount: 2,
  },
  {
    name: 'Autíčko na ovládání',
    price: 1500,
    amount: 1,
  },
  {
    name: 'Domeček pro panenky',
    price: 1350,
    amount: 1,
  },
  {
    name: 'Dětský telefon',
    price: 730,
    amount: 1,
  },
];

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: 1</span>
      </div>
      <div className="cart__items">
        {products.map((product) => (
          <CartItem product={product} key={product.name}/>
        ))}
      </div>
    </div>
  )
};

export default Cart;
