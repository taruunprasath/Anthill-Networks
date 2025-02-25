import React, { useState } from "react";
import { signUpWithEmail } from "../../../firebase";
import { useDispatch } from "react-redux";
import { setUser, setError } from "../../store/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Signup/signup.css";

const Signup = () => {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await signUpWithEmail(email, password);

      dispatch(setUser({ email: user.email, username }));

      toast.success(`Account created successfully! Welcome, ${username} 🎉`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      navigate("/home");
    } catch (error) {
      dispatch(setError(error.message));

      toast.error("Signup failed! Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
    
    <div className="auth-container slide-in-right">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login"><span className="switch-link">Login</span></Link>
        </p>
      </div>

      <div className="auth-image signup-image"></div>
    </div>
    <ToastContainer /> 
    </>
  );
};

export default Signup;
