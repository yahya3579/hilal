import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Css from "./pages/Css";
import Articles from "./pages/admin/Articles";
import Dashboard from "./pages/admin/Dashboard";
import CommentManagement from "./pages/admin/CommentManagement";
import MagazineManagement from "./pages/admin/MagazineManagement";
import ArticlesGallery from "./pages/admin/ArticlesGallery";
import BillBoards from "./pages/admin/BillBoards";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/css" element={<Css />} />
        <Route path="articles" element={<Articles />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bill-boards-management" element={<BillBoards />} />
        <Route path="/admin/articles-management" element={<ArticlesGallery />} />
        <Route path="/admin/magazine-management" element={<MagazineManagement />} />
        <Route path="/admin/comment-management" element={<CommentManagement />} />
        <Route path="/admin/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
