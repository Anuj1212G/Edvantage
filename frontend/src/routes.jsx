import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Website Pages
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
import CourseDetails from "./pages/CourseDetails.jsx";   // ✅ FIXED

// LMS Pages
import CourseDetail from "./pages/CourseDetail.jsx";      // ✅ LMS Page
import Checkout from "./pages/Checkout";
import MyLearning from "./pages/MyLearning";
import Profile from "./pages/Profile";
import CoursePlayer from "./pages/CoursePlayer";

// Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// Layout & Utils
import Layout from "./layouts/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          {/* Website Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<TrainingPrograms />} />
          <Route path="/placements" element={<PlacementsSuccess />} />
          <Route path="/webinars" element={<WebinarsEvents />} />
          <Route path="/mediaArticles" element={<StatsSection />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />

          {/* Training Program Detail Page */}
          <Route path="/course/:id" element={<CourseDetails />} />   {/* ✅ FIXED */}

          {/* LMS Routes */}
          <Route path="/courses" element={<Elearning />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/checkout/:courseId" element={<Checkout />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/my-learning" element={<MyLearning />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/learn/:courseId" element={<CoursePlayer />} />
          </Route>
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 404 Page */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
