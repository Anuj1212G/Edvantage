
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // ✅ Pages
// import Home from "./pages/Home"; 

// import Elearning from "./pages/Elearning";

// // ✅ LMS Pages
// import Courses from "./pages/Courses";
// import CourseDetail from "./pages/CourseDetail";
// import Checkout from "./pages/Checkout";
// import MyLearning from "./pages/MyLearning";
// import Profile from "./pages/Profile";

// // ✅ Auth Pages
// import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup";

// // ✅ Layouts
// import WebsiteLayout from "./layouts/Layout";
// import LMSLayout from "./layouts/LMSLayout";

// function AppRoutes() {
//   return (
//     <Router>
//       <Routes>
//         {/* 🌍 Website Layout Routes */}
//         <Route element={<WebsiteLayout />}>
//           <Route path="/" element={<Home />} />
//          
//           <Route path="/elearning" element={<Elearning />} />
//         </Route>

//         {/* 🎓 LMS Layout Routes */}
//         <Route element={<LMSLayout />}>
//           <Route path="/courses" element={<Elearning />} />
//           <Route path="/courses/:courseId" element={<CourseDetail />} />
//           <Route path="/checkout/:courseId" element={<Checkout />} />
//           <Route path="/my-learning" element={<MyLearning />} />
//           <Route path="/profile" element={<Profile />} />
//         </Route>

//         {/* 🔑 Auth Routes (no layout, direct pages) */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* 404 */}
//         <Route
//           path="*"
//           element={<h2 className="text-center mt-20">404 Page Not Found</h2>}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRoutes;


// src/routes.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Pages
import Home from "./pages/Home"; 
// ... other pages
import AboutUs from "./pages/AboutUs";
import StatsSection from "./components/StatsSection";
import TrainingPrograms from "./pages/TrainingPrograms";
import PlacementsSuccess from "./pages/PlacementsSuccess";
import WebinarsEvents from "./pages/WebinarsEvents";
import Elearning from "./pages/Elearning"; // This will be your 'All Courses' page
import BookDemo from "./pages/BookDemo";
// ✅ LMS Pages
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import MyLearning from "./pages/MyLearning";
import Profile from "./pages/Profile";
import CoursePlayer from "./pages/CoursePlayer"; // 👈 New component for video playback

// ✅ Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// ✅ Layouts
import Layout from "./layouts/Layout"; // 👈 Use the unified layout
import ProtectedRoute from "./components/ProtectedRoute"; // 👈 You'll need this component

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Unified Layout Routes */}
        <Route element={<Layout />}>
          {/* Website Routes */}
          <Route path="/" element={<Home />} />
          {/* ... other website pages */}
           <Route path="/about" element={<AboutUs />} />
           <Route path="/programs" element={<TrainingPrograms />} />
           <Route path="/placements" element={<PlacementsSuccess />} />
          <Route path="/webinars" element={<WebinarsEvents />} />
          <Route path="/mediaArticles" element={<StatsSection />} />
         <Route path="/book-demo" element={<BookDemo />} />
         
          {/* E-Learning/LMS Routes */}
          <Route path="/courses" element={<Elearning />} /> {/* All Courses List */}
          <Route path="/courses/:courseId" element={<CourseDetail />} /> {/* Course Details */}
          <Route path="/checkout/:courseId" element={<Checkout />} /> {/* Payment Page */}

          {/* Protected LMS Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/my-learning" element={<MyLearning />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/learn/:courseId" element={<CoursePlayer />} /> {/* New: Video Player */}
          </Route>
        </Route>

        {/* 🔑 Auth Routes (no layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 404 */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;