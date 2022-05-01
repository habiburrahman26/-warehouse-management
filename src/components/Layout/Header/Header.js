import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/icon/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import classes from './Header.module.css';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

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
          <ul className={classes['nav-item']}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes['active']} ${classes['nav-link']}`
                    : classes['nav-link']
                }
                to={`${location.pathname==='/home' ? '/home' : '/'}`}
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

        <div className={classes.btnContainer}>
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
      </div>
    </header>
  );
};

export default Header;
