import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookie.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default Home;
