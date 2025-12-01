import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Pages
import Home from "./pages/Home"; 
import AboutUs from "./pages/AboutUs";
import StatsSection from "./components/StatsSection";
import TrainingPrograms from "./pages/TrainingPrograms";
import PlacementsSuccess from "./pages/PlacementsSuccess";
import WebinarsEvents from "./pages/WebinarsEvents";
import Elearning from "./pages/Elearning";
import BookDemo from "./pages/BookDemo";
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";
import RequestInfo from "./pages/RequestInfo"; // or RequestInfoMailto.jsx if you named it that


// ✅ LMS Pages
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import MyLearning from "./pages/MyLearning";
import Profile from "./pages/Profile";
import CoursePlayer from "./pages/CoursePlayer";

// ✅ Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// ✅ Layouts
import Layout from "./layouts/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// ✅ Utility
import ScrollToTop from "./components/ScrollToTop"; // 👈 Added this line

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<TrainingPrograms />} />
          <Route path="/placements" element={<PlacementsSuccess />} />
          <Route path="/webinars" element={<WebinarsEvents />} />
          <Route path="/mediaArticles" element={<StatsSection />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />

          {/* ⭐ NEW ROUTE ADDED */}
          <Route path="/request-info" element={<RequestInfo />} />

          {/* LMS */}
          <Route path="/courses" element={<Elearning />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/checkout/:courseId" element={<Checkout />} />

          {/* Protected */}
          <Route element={<ProtectedRoute />}>
            <Route path="/my-learning" element={<MyLearning />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/learn/:courseId" element={<CoursePlayer />} />
          </Route>
        </Route>

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}


export default AppRoutes;