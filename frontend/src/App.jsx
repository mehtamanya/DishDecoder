import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import DishDetails from "./components/DishDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<DishDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
