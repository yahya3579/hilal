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
import VideosManagement from "./pages/admin/Management/VideosManagement";
import CreateVideo from "./pages/admin/Management/CreateVideo";

import EditArticle from "./pages/admin/Edit/EditArticle";
import EditAuthor from "./pages/admin/Edit/EditAuthor";
import EditBillBoard from "./pages/admin/Edit/EditBillBoard";
import EditMagazine from "./pages/admin/Edit/EditMagazine";
import HilalArchives from "./pages/HilalArchives";
import AboutUs from "./pages/AboutUs";
import HilalEbooks from "./pages/HilalEbooks";
import NationalInternationIssues from "./pages/National-Internation-Issues";
import Advertise from "./pages/Advertise";
import OurContributors from "./pages/OurContributors";
import BillboardsManagement from "./pages/admin/Management/BillboardsManagement";
import HilalUrdu from "./pages/HilalUrdu";
import HilalKids from "./pages/HilalKids";
import HilalUrduKids from "./pages/HilalKidsUrdu";
import HilalHer from "./pages/HilalHer";
import EbookManagement from "./pages/admin/Management/EbookManagement";
import EditEbook from "./pages/admin/Edit/EditEbook";
import UrduCategoriesPage from "./pages/UrduCategoriesPage";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* Hilal English */}
        <Route path="/hilal-urdu" element={<HilalUrdu />} />
        <Route path="/hilal-kids" element={<HilalKids />} />
        <Route path="/hilal-urdu-kids" element={<HilalUrduKids />} />
        <Route path="/hilal-her" element={<HilalHer />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/css" element={<Css />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articlepage/:articleId" element={<ArticlePage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="/archives" element={<HilalArchives />} />
        <Route path="/ebooks" element={<HilalEbooks />} />
        <Route path="/category/:category" element={<NationalInternationIssues />} />
        {/* <Route path="/category/urdu/:category" element={<UrduCategoriesPage />} /> */}
        <Route path="/ourcontributors" element={<OurContributors />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/advertise" element={<Advertise />} />
      </Route>

      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      {/* admin routes start*/}
      <Route element={
        <ProtectedRoutes><AdminLayout /></ProtectedRoutes>}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bill-boards-management" element={<BillboardsManagement />} />
        <Route path="/admin/articles-management" element={<ArticleManagement />}
        />
        <Route path="/admin/magazine-management" element={<MagazineManagement />}
        />
        <Route path="/admin/comment-management" element={<CommentManagement />}
        />
        <Route path="/admin/packages-management" element={<PackagesManagement />}
        />
        <Route path="/admin/authors-management" element={<AuthorsManagement />}
        />
        <Route path="/admin/ebooks-management" element={<EbookManagement />}
        />
        <Route path="/admin/videos-management" element={<VideosManagement />}
        />
        <Route path="/admin/videos-management/create" element={<CreateVideo />}
        />
        <Route path="/admin/*" element={<NotFound />} />
      </Route>
      <Route path="/admin/new-article/:articleId" element={<ProtectedRoutes><EditArticle /></ProtectedRoutes>} />
      <Route path="/admin/edit-billboard/:billboardId" element={<ProtectedRoutes><EditBillBoard /></ProtectedRoutes>} />
      <Route path="/admin/edit-magazine/:magazineId" element={<ProtectedRoutes><EditMagazine /></ProtectedRoutes>} />
      <Route path="/admin/edit-author/:authorId" element={<ProtectedRoutes><EditAuthor /></ProtectedRoutes>} />
      <Route path="/admin/new-article" element={<ProtectedRoutes><EditArticle /></ProtectedRoutes>} />
      <Route path="/admin/edit-author" element={<ProtectedRoutes><EditAuthor /></ProtectedRoutes>} />
      <Route path="/admin/edit-billboard" element={<ProtectedRoutes><EditBillBoard /></ProtectedRoutes>} />
      <Route path="/admin/edit-magazine" element={<ProtectedRoutes><EditMagazine /></ProtectedRoutes>} />
      <Route path="/admin/edit-ebook" element={<ProtectedRoutes><EditEbook /></ProtectedRoutes>} />
      <Route path="/admin/edit-ebook/:ebookId" element={<ProtectedRoutes><EditEbook /></ProtectedRoutes>} />
      {/* admin routes end */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
