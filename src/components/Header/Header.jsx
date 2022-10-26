import './Header.css';
import burgerMenu from '../../images/burgerMenu.svg';
export const Header = () => (
  <div className="header">
      <button
        className="header__button-menu"
        style={{
          backgroundImage: `url(${burgerMenu})`
      }}/>
      <div className="header__title">Расчет инсулина</div>
  </div>
);
