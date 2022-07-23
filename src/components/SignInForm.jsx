import React from 'react';
import { Link } from 'react-router-dom';

export const SignInForm = () => {
  return (
    <>
      <div className="signInContainer">
        <div className="fromWrap">
          <Link to={'/'} className="icon">
            dolla
          </Link>
          <div className="formContent">
            <form action="#">
              <h1>Sing In to your account</h1>
              <label htmlFor="for">Email</label>
              <input type="email" required />

              <label htmlFor="for">Password</label>
              <input type="password" required />

              <button type="submit">Continue</button>

              <span>Forget Password</span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
