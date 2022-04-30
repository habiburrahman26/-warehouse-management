import { Link } from 'react-router-dom';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import './Login.css';

const Login = () => {
  return (
    <div className="form-container">
      <form className="form-control">
        <h1 className="heading">Login</h1>
        <div className="input-control">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="input-control">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="button" className="forgot-password">
          Forget Password?
        </button>
        <div>
          <button className="btn-login">Login</button>
        </div>

        <div className="line-break">
          <div className="line"></div>
          <div>or</div>
          <div className="line"></div>
        </div>
        <SocialMediaLogin name="Login" />

        <div className="toggle-page">
          <p>No account yet? </p>
          <Link to="/registration" className="link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
