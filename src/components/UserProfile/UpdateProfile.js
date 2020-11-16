import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/profile");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      })
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
          defaultValue={currentUser.email}
          required
        />
        <input
          type="password"
          className="rounded my-2 p-1 block"
          placeholder="New Password"
          ref={passwordRef}
          required
        />
        <input
          type="password"
          className="rounded my-2 p-1 block"
          placeholder="Confirm New Password"
          ref={confirmPasswordRef}
          required
        />
        <button className="bg-teal-800 text-white rounded p-1 w-full" disabled={loading} type="submit">
          Save
        </button>
      </form>
      <div className="flex-col py-2">
      <Link to="/profile" className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">Cancel</Link>
      </div>
    </div>
  </div>
  )
}

export default UpdateProfile;