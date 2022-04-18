import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";

function App() {
  const user = false;
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
