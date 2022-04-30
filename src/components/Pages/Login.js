import { Link } from 'react-router-dom';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import './Login.css';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

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