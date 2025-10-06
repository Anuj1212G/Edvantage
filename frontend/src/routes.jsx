// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // ✅ Pages
// import Home from "./pages/Home"; // ✅ new combined homepage
// import AboutUs from "./pages/AboutUs";
// import TrainingPrograms from "./pages/TrainingPrograms";
// import PlacementsSuccess from "./pages/PlacementsSuccess";
// import WebinarsEvents from "./pages/WebinarsEvents";

// // ✅ LMS Pages
// import Courses from "./pages/Courses";
// import CourseDetail from "./pages/CourseDetail";
// import Checkout from "./pages/Checkout";
// import MyLearning from "./pages/MyLearning";
// import Profile from "./pages/Profile";

// // ✅ Auth Pages
// import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup";

// // ✅ Common Layout
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Elearning from "./pages/Elearning";

// function AppRoutes() {
//   return (
//     <Router>
//       <Header />
//       <main className="min-h-screen">
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/programs" element={<TrainingPrograms />} />
//           <Route path="/placements" element={<PlacementsSuccess />} />
//           <Route path="/events" element={<WebinarsEvents />} />

//           {/* LMS Routes */}
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/courses/:courseId" element={<CourseDetail />} />
//           <Route path="/checkout/:courseId" element={<Checkout />} />
//           <Route path="/my-learning" element={<MyLearning />} />
//           <Route path="/profile" element={<Profile />} />

//           {/* Auth Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//             <Route path="/elearning" element={<Elearning />} />
//           {/* 404 */}
//           <Route path="*" element={<h2 className="text-center mt-20">404 Page Not Found</h2>} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default AppRoutes;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Pages
import Home from "./pages/Home"; 
import AboutUs from "./pages/AboutUs";
import TrainingPrograms from "./pages/TrainingPrograms";
import PlacementsSuccess from "./pages/PlacementsSuccess";
import WebinarsEvents from "./pages/WebinarsEvents";
import Elearning from "./pages/Elearning";

// ✅ LMS Pages
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import MyLearning from "./pages/MyLearning";
import Profile from "./pages/Profile";

// ✅ Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// ✅ Layouts
import WebsiteLayout from "./layouts/WebsiteLayout";
import LMSLayout from "./layouts/LMSLayout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* 🌍 Website Layout Routes */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<TrainingPrograms />} />
          <Route path="/placements" element={<PlacementsSuccess />} />
          <Route path="/events" element={<WebinarsEvents />} />
          <Route path="/elearning" element={<Elearning />} />
        </Route>

        {/* 🎓 LMS Layout Routes */}
        <Route element={<LMSLayout />}>
          <Route path="/courses" element={<Elearning />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/checkout/:courseId" element={<Checkout />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* 🔑 Auth Routes (no layout, direct pages) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 404 */}
        <Route
          path="*"
          element={<h2 className="text-center mt-20">404 Page Not Found</h2>}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
