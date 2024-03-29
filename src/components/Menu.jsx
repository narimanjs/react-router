import { NavLink } from 'react-router-dom';
const Menu = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <NavLink
          to='.'
          end
          className='nav-links'
        >
          <h2>Nariman BookStore</h2>
        </NavLink>
        <div className='nav-links'>
          <NavLink to='/cart'>Корзина</NavLink>
          <NavLink to='/about'>О нас</NavLink>
          <NavLink to='/contacts'>Контакты</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
