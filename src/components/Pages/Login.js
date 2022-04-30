import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  // If user register successfully navigate to the home page
  useEffect(() => {
    if (user) {
      navigate('/home', { replace: true });
    }
  }, [user, navigate]);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="heading">Login</h1>
        <div className="input-control">
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
          />
          <label>
            {errors.email?.type === 'required' && 'Email is required'}
          </label>
        </div>
        <div className="input-control">
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="Password"
          />
          <label>
            {errors.password?.type === 'required' && 'Password is required'}
          </label>
        </div>
        <button type="button" className="forgot-password">
          Forget Password?
        </button>
        <p className="error-text">{error?.message}</p>
        <div>
          <button className="btn-login">
            {loading ? 'Loading...' : 'Login'}
          </button>
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
