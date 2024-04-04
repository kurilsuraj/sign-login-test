import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken) {
      navigate("/", { replace: true });
    }
  }, [navigate]); // Empty dependency array for effect to run only on initial render

  const onSubmitBtn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.jwtToken;
        Cookies.set("jwt_token", token, { expires: 30 });
        navigate("/", { replace: true });
      } else {
        alert(`Signup failed: ${response.data}`); // Handle errors from backend
      }
    } catch (error) {
      alert(`An error occurred: ${error.response.data}`);
    }
  };

  const onChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="bg-container">
      <div>
        <h1 className="heading">Login</h1>
        <form className="form-container" onSubmit={onSubmitBtn}>
          <label className="label-item">Enter Name</label>
          <input
            onChange={onChangeUser}
            className="input-item"
            type="text"
            placeholder="Enter your Name"
          />
          <label className="label-item">Enter Password</label>
          <input
            onChange={onChangePassword}
            className="input-item"
            type="password" // Use type="password" for password field
            placeholder="Enter your Password"
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
        <Link to="/sign-up">New Here Create Account</Link>
      </div>
    </div>
  );
};

export default Login;
