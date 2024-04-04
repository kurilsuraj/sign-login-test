import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Users from "./components/Users";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>
);

export default App;
