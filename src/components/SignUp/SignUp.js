import React, { useRef, useState } from "react";
import { useAuth } from '../../contexts/AuthContext';

const SignUp = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Password do not match!')
    }

    try{
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
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
        {error && <h3 className="text-red-600 text-center">{error}</h3>}
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
          <button className="bg-teal-800 text-white rounded p-1 w-full" disabled={loading}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
