import ShoppingCart from "../../modules/ShoppingCart";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div>TrueHome Flights</div>
      <div>
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default Header;
