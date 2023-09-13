import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Offers from "./Components/Offers";
import Help from "./Components/Help";
import Signin from "./Components/Signin";
import Cart from "./Components/Cart";
import RestroCategories from "./Components/RestroCategories";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/offers" element={<Offers />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/restaurant/:resId"
            element={<RestroCategories />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
