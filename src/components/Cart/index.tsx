import IProduct from '../../models/Product';
import CartItem from '../CartItem';
import './style.css';

interface CartProps {
  products: IProduct[];
  onAmountChange: (amount: number, index: number) => void;
  totalAmount: number;
}

const Cart: React.FC<CartProps> = ({
  products,
  onAmountChange,
  totalAmount,
}) => {
  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: {totalAmount}</span>
      </div>
      <div className="cart__items">
        {products.map((product, index) => (
          <CartItem
            product={product}
            key={product.name}
            onAmountChange={(amount) => onAmountChange(index, amount)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
