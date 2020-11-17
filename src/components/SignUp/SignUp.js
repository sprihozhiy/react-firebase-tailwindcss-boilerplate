import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Password do not match!')
    }

    try{
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard")
    } 
    catch(e) {
     // console.log(e);
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex-col">
        <h2 className="text-center py-2">Sign Up</h2>
        {error && <p className="text-red-600 text-center text-sm">{error}</p>}
        <form className="p-4 flex-col border-solid border-2 border-white" onSubmit={handleSubmit}>
          <input
            type="email"
            className="rounded my-2 p-1 block"
            placeholder="Email"
            ref={emailRef}
            required
          />
          <input
            type="password"
            className="rounded my-2 p-1 block"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <input
            type="password"
            className="rounded my-2 p-1 block"
            placeholder="Repeat Password"
            ref={confirmPasswordRef}
            required
          />
          <button className="bg-teal-800 text-white rounded p-1 w-full" disabled={loading} type="submit">
            Sign Up
          </button>
        </form>
        <div className="flex-col py-2">
          <p className="text-sm text-center">Already have an account? <Link to="/" className="text-blue-700">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
