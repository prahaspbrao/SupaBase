import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <h1 className="logo">🥤 Supa Smoothies</h1>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/create" className="btn">
              + New Smoothie
            </Link>
          </div>
        </nav>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Update />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
