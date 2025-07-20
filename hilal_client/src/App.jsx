import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Css from "./pages/Css";
import Articles from "./pages/admin/Articles";
import Dashboard from "./pages/admin/Management/Dashboard";
import CommentManagement from "./pages/admin/Management/CommentManagement";
import MagazineManagement from "./pages/admin/Management/MagazineManagement";
import BillBoards from "./pages/admin/Management/BillBoards";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import ArticlePage from "./pages/ArticlePage";
import AuthorsManagement from "./pages/admin/Management/AuthorsManagement";
import PackagesManagement from "./pages/admin/Management/PackagesManagement";
import ArticleManagement from "./pages/admin/Management/ArticlesManagement";

import EditArticle from "./pages/admin/Edit/EditArticle";
import EditAuthor from "./pages/admin/Edit/EditAuthor";
import EditBillBoard from "./pages/admin/Edit/EditBillBoard";
import EditMagazine from "./pages/admin/Edit/EditMagazine";
import HilalArchives from "./pages/HilalArchives";
import OurContributors from "./pages/OurContributors";
import AboutUs from "./pages/AboutUs";
import HilalEbooks from "./pages/HilalEbooks";
import NationalInternationIssues from "./pages/National-Internation-Issues";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            // <ProtectedRoutes> <Home /></ProtectedRoutes>} />
            <Home />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/css" element={<Css />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articlepage" element={<ArticlePage />} />
        <Route path="/archives" element={<HilalArchives />} />
        <Route path="/ebooks" element={<HilalEbooks />} />
        <Route path="/nation-international-issues" element={<NationalInternationIssues />} />
        <Route path="/contributors" element={<OurContributors />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Route>

      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      {/* admin routes start*/}
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bill-boards-management" element={<BillBoards />} />
        <Route
          path="/admin/articles-management"
          element={<ArticleManagement />}
        />
        <Route
          path="/admin/magazine-management"
          element={<MagazineManagement />}
        />
        <Route
          path="/admin/comment-management"
          element={<CommentManagement />}
        />
        <Route
          path="/admin/packages-management"
          element={<PackagesManagement />}
        />
        <Route
          path="/admin/authors-management"
          element={<AuthorsManagement />}
        />
        <Route path="/admin/*" element={<NotFound />} />
      </Route>
      <Route path="/admin/new-article" element={<EditArticle />} />
      <Route path="/admin/edit-author" element={<EditAuthor />} />
      <Route path="/admin/edit-billboard" element={<EditBillBoard />} />
      <Route path="/admin/edit-magazine" element={<EditMagazine />} />
      {/* admin routes end */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
