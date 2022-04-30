import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import logo from '../../assets/icon/logo.png';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes['heading-container']}>
          <div className={classes.flex}>
            <img src={logo} alt="" className={classes.logo} />
            <h1 className={classes.heading}>E-store</h1>
          </div>

          <ul className={classes['social-links']}>
            <li>
              <Link to="" className={classes['footer-link']}>
                <img
                  src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
                  alt=""
                  className={classes.icon}
                />
              </Link>
            </li>
            <li>
              <Link to="" className={classes['footer-link']}>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
                  alt=""
                  className={classes.icon}
                />
              </Link>
            </li>
            <li>
              <Link to="" className={classes['footer-link']}>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
                  alt=""
                  className={classes.icon}
                />
              </Link>
            </li>
          </ul>

          <p className={classes.copyright}>
            Copyright &copy; <span class="year">2022</span> by E-store. All
            rights reserved.
          </p>
        </div>

        <div className={classes['address-col']}>
          <p className={classes['footer-heading']}>Contact us</p>
          <address className={classes.contacts}>
            <p className={classes.address}>
              623 Kazi bari, 2nd Floor, Kuril, Dhaka
            </p>
            <p>
              <Link
                to=""
                className={classes['footer-link']}
                href="tel:415-201-6370"
              >
                415-201-6370
              </Link>
              <br />
              <Link className={classes['footer-link']} to="">
                hello@estore.com
              </Link>
            </p>
          </address>
        </div>

        <nav className={classes['nav-col']}>
          <p className={classes['footer-heading']}>Account</p>
          <ul className={classes['footer-nav']}>
            <li>
              <Link to="/register" className={classes['footer-link']}>
                Create account
              </Link>
            </li>
            <li>
              <Link to="/login" className={classes['footer-link']}>
                Log in
              </Link>
            </li>
            <li>
              <Link to="" className={classes['footer-link']}>
                iOS app
              </Link>
            </li>
            <li>
              <Link to="" className={classes['footer-link']}>
                Android app
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={classes['nav-col']}>
          <p className={classes['footer-heading']}>Company</p>
          <ul className={classes['footer-nav']}>
            <li>
              <Link to="/blogs" className={classes['footer-link']}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="" className={classes['footer-link']}>
                About
              </Link>
            </li>
            <li>
              <Link to="" className={classes['footer-link']}>
                For Business
              </Link>
            </li>
            <li>
              <Link to="" className={classes['footer-link']}>
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={classes['nav-col']}>
          <p className={classes['footer-heading']}>Resources</p>
          <ul className={classes['footer-nav']}>
            <li>
              <Link to="" className={classes['footer-link']}>
                Forums
              </Link>
            </li>
            <li>
              <Link to="" className={classes['footer-link']}>
                Help center
              </Link>
            </li>
            <li>
              <Link to="" className={classes['footer-link']}>
                Privacy & terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
