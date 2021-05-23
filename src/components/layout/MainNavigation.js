import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Cookie Jar</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/Cookies' activeClassName={classes.active}>
              All Cookies
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-Cookie' activeClassName={classes.active}>
              Add a Cookie
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
