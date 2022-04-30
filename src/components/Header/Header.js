import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icon/logo.png';
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
            <NavLink className={classes['nav-link']} to="/home">
              Home
            </NavLink>
            <NavLink className={classes['nav-link']} to="/home">
              Mange Items
            </NavLink>
            <NavLink className={classes['nav-link']} to="/home">
              Add Item
            </NavLink>
            <NavLink className={`${classes['nav-link']} ${classes.active}`} to="/home">
              My Items
            </NavLink>
          </ul>
        </nav>
        <div className={classes.btnContainer}>
          <NavLink to='/login' className={`${classes.btn} ${classes.btnLogin}`}>
            Log In
          </NavLink>
          <NavLink to='/registration' className={`${classes.btn} ${classes.btnRegistration}`}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
