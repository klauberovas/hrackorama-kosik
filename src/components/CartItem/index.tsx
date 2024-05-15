import IProduct from "../../models/Product";
import Amount from "../Amount";
import CartProduct from "../CartProduct";
import './style.css';

interface ICartItemProps {
  product: IProduct;
}

const CartItem: React.FC<ICartItemProps> = ({ product }) => {
  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount value={product.amount} />
    </div>
  )
};

export default CartItem;
