import { Link, useNavigate } from 'react-router-dom';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import './Login.css';
import { useEffect } from 'react';

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // If user register successfully navigate to the home page
  useEffect(() => {
    if (user) {
      navigate('/home', { replace: true });
    }
  }, [user, navigate]);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="heading">Registration</h1>
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
        <br />
        {/* firebase error message */}
        <p className="error-text">{error?.message}</p>
        <div>
          <button className="btn-login">
            {loading ? 'Registration...' : 'Registration'}
          </button>
        </div>

        <div className="line-break">
          <div className="line"></div>
          <div>or</div>
          <div className="line"></div>
        </div>
        <SocialMediaLogin name="Registrater" />

        <div className="toggle-page">
          <p>Already have an Account? </p>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
