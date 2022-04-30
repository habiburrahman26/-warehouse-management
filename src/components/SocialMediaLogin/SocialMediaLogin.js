import { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../../UI/LoadingSpinner';

const SocialMediaLogin = ({ name }) => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // If user register successfully navigate to the home page
  useEffect(() => {
    if (user) {
      navigate('/home', { replace: true });
    }
  }, [user, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }


  return (
    <div className="social-meadia-signin">
      <div>
        <button type="button">
          <img
            src="https://img.icons8.com/glyph-neue/64/000000/github.png"
            alt=""
          />
          <p>{name} with github</p>
        </button>
      </div>
      <div>
        <button type="button" onClick={() => signInWithGoogle()}>
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt=""
          />
          <p>{name} with google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
