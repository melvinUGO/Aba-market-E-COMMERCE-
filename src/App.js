import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Cart } from "./pages/Cart";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Me from "./pages/Me";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/me" element={<Me />} />
        <Route exact path="/Log in" element={<Login />} />
        <Route exact path="/Sign up" element={<Signup />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
