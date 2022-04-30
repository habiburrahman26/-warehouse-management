import React from 'react';

const SocialMediaLogin = ({name}) => {
  return (
    <div className="social-meadia-signin">
      <div>
        <button type="button">
          <img
            src="https://img.icons8.com/glyph-neue/64/000000/github.png"
            alt=""
          />
          <p>{name} In with github</p>
        </button>
      </div>
      <div>
        <button type="button">
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
