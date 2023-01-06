// import { Container } from './styles';

import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';
import Container from './Container';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to='/'>
          <img src={logo} alt='Costing' />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li className={styles.item}>
            <Link to='/Company'>Company</Link>
          </li>
          <li className={styles.item}>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
