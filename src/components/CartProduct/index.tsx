import './style.css';

interface CartProductProps {
  name: string;
  price: number;
}

const CartProduct: React.FC<CartProductProps> = ({ name, price }) => {
  return (
    <div className="cart-product">
      <span>{name}</span>
      <span>{price} kč</span>
    </div>
  )
};

export default CartProduct;
