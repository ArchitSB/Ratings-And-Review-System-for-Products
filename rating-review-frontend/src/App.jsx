import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthContext } from "./utils/AuthContext";

function Header() {
  const { user, setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setToken("");
    navigate("/login");
  };

  return (
    <div className="header-bar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 32px" }}>
      <Link to="/" className="header-title">Ratings & Reviews</Link>
      <div>
        {user ? (
          <>
            <span style={{ color: "#fff", marginRight: 18, fontWeight: 500 }}>
              Hi, {user.name}
            </span>
            <button onClick={handleLogout} style={{
              background: "#fff",
              color: "#7c3aed",
              border: "none",
              borderRadius: 6,
              padding: "6px 16px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s"
            }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "#fff", marginRight: 16, fontWeight: 500 }}>Login</Link>
            <Link to="/signup" style={{ color: "#fff", fontWeight: 500 }}>Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;