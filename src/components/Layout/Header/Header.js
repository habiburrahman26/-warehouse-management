import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/icon/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import classes from './Header.module.css';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const logoutHandler = () => {
    signOut(auth);
    navigate('/login');
  };

  return (
    <header className={classes.header}>
      <div className={classes['nav-header']}>
        <div className={classes['heading-container']}>
          <img src={logo} alt="" className={classes.logo} />
          <h1 className={classes.heading}>E-store</h1>
        </div>
        <nav className={classes['nav-items']}>
          <ul
            onClick={changeToggle}
            className={`${classes['nav-item']} ${
              toggle ? classes.show : classes.close
            }`}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes['active']} ${classes['nav-link']}`
                    : classes['nav-link']
                }
                to={`${location.pathname === '/home' ? '/home' : '/'}`}
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
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `${classes['active']} ${classes['nav-link']}`
                        : classes['nav-link']
                    }
                    to="/manageInventories"
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
              </>
            )}
          </ul>
        </nav>

        <div
          onClick={changeToggle}
          className={`${classes.btnContainer} ${
            toggle ? classes.show : classes.close
          }`}
        >
          {!user && (
            <>
              <NavLink
                to="/login"
                className={`${classes.btn} ${classes.btnLogin}`}
              >
                Log In
              </NavLink>
              <NavLink
                to="/registration"
                className={`${classes.btn} ${classes.btnRegistration}`}
              >
                Sign Up
              </NavLink>
            </>
          )}
          {user && (
            <button
              onClick={logoutHandler}
              className={`${classes.btn} ${classes.btnLogout}`}
            >
              Logout
            </button>
          )}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          onClick={changeToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
