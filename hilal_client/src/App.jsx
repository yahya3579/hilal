import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Css from "./pages/Css";
import Articles from "./pages/admin/Articles";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/css" element={<Css />} />
      </Route>
      <Route path="/admindashboard" element={<AdminLayout />}>
        <Route path="articles" element={<Articles />} />
      </Route>
    </Routes>
  );
};

export default App;
