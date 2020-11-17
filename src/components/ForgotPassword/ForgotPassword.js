import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
      emailRef.current.value = '';
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex-col">
        <h2 className="text-center py-2">Forgot Password?</h2>
        {error && <p className="text-red-600 text-center text-sm">{error}</p>}
        {message && <p className="text-green-600 text-center text-sm">{message}</p>}
        <form className="p-4 flex-col border-solid border-2 border-white" onSubmit={handleSubmit}>
          <input
            type="email"
            className="rounded my-2 p-1 block"
            placeholder="Enter Your Email..."
            ref={emailRef}
            required
          />
          <button className="bg-teal-800 text-white rounded p-1 w-full" disabled={loading} type="submit">
            Send Password Reset
          </button>
        </form>
        <div className="flex-col py-2">
          <p className="text-sm text-center"><Link to="/signin" className="text-blue-700">Return to the preivious page</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
