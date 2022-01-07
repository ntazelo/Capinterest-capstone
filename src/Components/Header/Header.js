import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="navigation-cont">
    <Link to="/" className="back-link-cont">
      <i className="fas fa-chevron-left" />
      <span className="link-hint">Menu</span>
    </Link>
    <span className="on-page-hint">Category</span>
    <nav className="icons-cont">
      <ul className="icons-list-wrapper">
        <li className="icon"><i className="fas fa-microphone" /></li>
        <li className="icon"><i className="fas fa-cog" /></li>
      </ul>
    </nav>
  </header>
);

export default Header;
