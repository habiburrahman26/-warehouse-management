import { useEffect } from 'react';
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../../UI/LoadingSpinner';

const SocialMediaLogin = ({ name }) => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, loading1, error1] =
    useSignInWithFacebook(auth);

  let content;

  if (error || error1) {
    content = error?.message;
  }

  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  // If user register successfully navigate to the home page
  useEffect(() => {
    if (user || user1) {
      navigate(from, { replace: true });
    }
  }, [user, user1, navigate,from]);

  if (loading || loading1) {
    return <LoadingSpinner />;
  }

  return (
    <div className="social-meadia-signin">
      {content}
      <div>
        <button type="button" onClick={() => signInWithFacebook()}>
          <img
            src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
            alt="facebook icon"
          />
          <p>{name} with Facebook</p>
        </button>
      </div>
      <div>
        <button type="button" onClick={() => signInWithGoogle()}>
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="google icon"
          />
          <p>{name} with google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
