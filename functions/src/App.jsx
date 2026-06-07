import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componenets/Home/Home";
import Profile from "./Componenets/Profile/Profile";
import Navbar from "./Componenets/Home/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;