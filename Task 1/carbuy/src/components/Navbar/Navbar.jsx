import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import Logo from "../../assets/logo.png";
import "../Navbar/navbar.css";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert("Error logging out. Please try again.");
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      <motion.div
        className="logo-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
      </motion.div>

      <motion.ul
        className="nav-links"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        {["home", "about", "cars", "contact"].map((item, index) => (
          <motion.li
            key={item}
            className="nav-item"
            whileHover={{ scale: 1.1, color: "#ffcc00" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/${item}`} className="nav-link">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="auth-section"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {user ? (
          <>
            <motion.span
              className="username"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Hello, {user.username}!
            </motion.span>
            <motion.button
              onClick={handleLogout}
              className="logout-button"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Logout
            </motion.button>
          </>
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/login" className="login-button">
              Login
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
