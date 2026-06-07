import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    textDecoration: "none",
    color: isActive ? "blue" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
        mb:"20px",
      }}
    >
      {/* Logo */}
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Bank App
      </h2>

      {/* Links */}
      <div>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/profile" style={linkStyle}>
          Profile
        </NavLink>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/profile")}
        style={{
          padding: "6px 12px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;

