import './style.css';

interface HeaderProps {
  totalPrice: number;
}

const Header: React.FC<HeaderProps> = ({ totalPrice }) => {
  return (
    <header>
      <div className="brand">Hračkorama</div>
      <span>Košík: {totalPrice} kč</span>
    </header>
  );
};

export default Header;
