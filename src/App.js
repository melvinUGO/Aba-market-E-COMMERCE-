import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import { Cart } from "./Cart";
import Error from "./Error";
import Navbar from "./Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
