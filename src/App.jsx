import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import DineIn from "./pages/DineIn";
import OnlineOrder from "./pages/OnlineOrder";
import Catering from "./pages/Catering";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        >
          <Route
            path="dinein"
            element={<DineIn />}
          />

          <Route
            path="onlineorder"
            element={<OnlineOrder />}
          />

          <Route
            path="catering"
            element={<Catering />}
          />
        </Route>

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/menu"
          element={<Menu />}
        />

        <Route
          path="/menu/:id"
          element={<FoodDetails />}
        />
      </Routes>
    </>
  );
}

export default App;