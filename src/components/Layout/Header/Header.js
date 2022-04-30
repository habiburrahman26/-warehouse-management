import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/icon/logo.png';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['nav-header']}>
        <div className={classes['heading-container']}>
          <img src={logo} alt="" className={classes.logo} />
          <h1 className={classes.heading}>E-store</h1>
        </div>
        <nav className={classes['nav-items']}>
          <ul className={classes['nav-item']}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes['active']} ${classes['nav-link']}`
                    : classes['nav-link']
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes['active']} ${classes['nav-link']}`
                    : classes['nav-link']
                }
                to="/manageItems"
              >
                Mange Items
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes['active']} ${classes['nav-link']}`
                    : classes['nav-link']
                }
                to="/addItem"
              >
                Add Item
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes['active']} ${classes['nav-link']}`
                    : classes['nav-link']
                }
                to="/myItems"
              >
                My Items
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes['active']} ${classes['nav-link']}`
                    : classes['nav-link']
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.btnContainer}>
          <NavLink to="/login" className={`${classes.btn} ${classes.btnLogin}`}>
            Log In
          </NavLink>
          <NavLink
            to="/registration"
            className={`${classes.btn} ${classes.btnRegistration}`}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
