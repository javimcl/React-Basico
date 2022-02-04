import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete='off'
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete='off'
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
         <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
        />
        <button className='btn btn-primary btn-block mb-5'
          type="submit"
        >
          Register
        </button>

        <div className='auth__social-networks'>
          <p>Login with social metworks</p><div
            className="google-btn"
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className='link'
          to="/auth/login">
         Already registered?
        </Link>

      </form>
    </>
  );
};
