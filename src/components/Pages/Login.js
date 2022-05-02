import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import './Login.css';
import { useForm } from 'react-hook-form';
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [enteredEmail, setEnteredEmail] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || '/';

  // If user register successfully navigate to the home page
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  // token generate
  const tokenGenerate = async (email) => {
    const { data } = await axios.post('http://localhost:5000/token', {
      email: email,
    });
    localStorage.setItem('token', `${data.token}`);
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    tokenGenerate(email);
  };

  // send email password rest link
  const forgetPasswordHandler = async (e) => {
    if (enteredEmail.trim() !== '') {
      await sendPasswordResetEmail(enteredEmail);
      toast.info('Email Send');
    } else {
      toast.error('Please enter your email');
    }
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
            onChange={(e) => setEnteredEmail(e.target.value)}
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
        <button
          type="button"
          className="forgot-password"
          onClick={forgetPasswordHandler}
        >
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
