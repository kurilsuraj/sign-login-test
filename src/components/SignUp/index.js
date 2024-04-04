import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./index.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const onSubmitBtn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/register", {
        username,
        password,
      });

      console.log(response);

      if (response.status === 200) {
        alert("Signup successful! Login Now");
        navigate("/login", { replace: true }); // Redirect to home page
      } else {
        alert(`Signup failed: ${response.data}`); // Handle errors from backend
      }
    } catch (error) {
      console.error(error.response);
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
        <h1 className="heading">Sign Up</h1>
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
            Sign Up
          </button>
        </form>
        <Link to="/login">Already Have an account! Login Here</Link>
      </div>
    </div>
  );
};

export default SignUp;
