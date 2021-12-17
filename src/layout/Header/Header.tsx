import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div>TrueHome Flights</div>
      <div>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </nav>
  );
};

export default Header;
