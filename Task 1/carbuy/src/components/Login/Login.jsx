import React, { useState } from "react";
import { signInWithEmail } from "../../../firebase"; 
import { useDispatch } from "react-redux";
import { setUser, setError } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Login/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmail(email, password);

      const username = user.displayName || email.split("@")[0]; 

      dispatch(setUser({ email: user.email, username })); 

      toast.success(`Welcome back, ${username}! 🚗`, {
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

      toast.error("Invalid email or password. Please try again!", {
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
    <div className="login-container"> 
      <div className="login-image"></div>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
          <p>
            Don't have an account?
            <Link to="/signup">
              <span> Signup</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
    <ToastContainer />
    </>
  );
};

export default Login;
