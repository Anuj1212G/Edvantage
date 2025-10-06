// import { useParams, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { FaStar, FaUser, FaClock, FaCheckCircle } from "react-icons/fa"; // Importing icons for a professional look

// // --- TEMPORARY COURSE DATA (expanded for detail) ---
// const allCourses = {
//   1: {
//     title: "React for Beginners",
//     desc: "A comprehensive course to build your first React applications from scratch. Covers components, state, props, and hooks.",
//     price: 499,
//     rating: 4.5,
//     students: 1250,
//     duration: "10 hours",
//     lectures: 45,
//     imageUrl: "https://images.unsplash.com/photo-1633356122544-53018e698188?q=80&w=2080&auto=format&fit=crop",
//     whatYoullLearn: [
//       "Understand the core concepts of React",
//       "Build dynamic and interactive UIs",
//       "Use React Hooks like useState and useEffect",
//       "Manage component state and props effectively",
//     ],
//   },
//   2: {
//     title: "Node.js Mastery",
//     desc: "Deep dive into building scalable backend APIs with Node.js and Express. Learn about middleware, database integration, and security.",
//     price: 699,
//     rating: 4.8,
//     students: 850,
//     duration: "15 hours",
//     lectures: 60,
//     imageUrl: "https://images.unsplash.com/photo-1610484555896-1c20e24e69b2?q=80&w=2070&auto=format&fit=crop",
//     whatYoullLearn: [
//       "Create a RESTful API with Node.js and Express",
//       "Connect to MongoDB databases",
//       "Implement user authentication and authorization",
//       "Deploy your Node.js application to the cloud",
//     ],
//   },
//   3: {
//     title: "Data Structures in JS",
//     desc: "Master essential data structures and algorithms using JavaScript. This course will prepare you for technical interviews.",
//     price: 399,
//     rating: 4.2,
//     students: 2100,
//     duration: "8 hours",
//     lectures: 35,
//     imageUrl: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1961&auto=format&fit=crop",
//     whatYoullLearn: [
//       "Implement common data structures like arrays, lists, and trees",
//       "Analyze algorithm efficiency with Big O notation",
//       "Solve complex problems using algorithms",
//       "Prepare for coding interviews with confidence",
//     ],
//   },
// };

// export default function CourseDetail() {
//   const { courseId } = useParams();
//   const course = allCourses[courseId];
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const handleBuy = () => {
//     if (!user) {
//       // Redirect to login with a state to return to this page
//       navigate("/login", { state: { from: `/courses/${courseId}` } });
//     } else {
//       navigate(`/checkout/${courseId}`);
//     }
//   };

//   if (!course) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <p className="text-2xl font-semibold text-red-500">
//           Course not found.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-10">
//       <div className="container mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
//         {/* Course Header Section with Image */}
//         <div className="relative h-64 md:h-96">
//           <img
//             src={course.imageUrl}
//             alt={course.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 md:p-10">
//             <div className="text-white">
//               <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
//                 {course.title}
//               </h1>
//               <p className="text-md md:text-lg mb-4 max-w-2xl">
//                 {course.desc}
//               </p>
//               {/* Star Rating and Info */}
//               <div className="flex items-center space-x-4">
//                 <span className="flex items-center text-yellow-400 font-bold">
//                   <FaStar className="mr-1" />
//                   {course.rating.toFixed(1)} Rating
//                 </span>
//                 <span className="flex items-center text-gray-200">
//                   <FaUser className="mr-1" />
//                   {course.students.toLocaleString()} Students
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content and Sidebar Layout */}
//         <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8">
//           {/* Main Description and "What You'll Learn" */}
//           <div className="md:w-2/3">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               Course Details
//             </h2>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               {course.desc}
//             </p>
            
//             <h3 className="text-xl font-bold text-gray-800 mb-3">
//               What You'll Learn
//             </h3>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
//               {course.whatYoullLearn.map((item, index) => (
//                 <li key={index} className="flex items-start">
//                   <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* Sidebar/Call-to-Action Card */}
//           <div className="md:w-1/3 bg-white p-6 rounded-lg border border-gray-200 shadow-lg md:sticky md:top-8 md:self-start">
//             <div className="flex items-center justify-between mb-4">
//               <h4 className="text-xl font-bold text-gray-800">
//                 ₹{course.price}
//               </h4>
//               <div className="flex items-center text-sm text-gray-500">
//                 <FaClock className="mr-1" />
//                 <span>{course.duration}</span>
//               </div>
//             </div>
//             <p className="text-sm text-gray-500 mb-4">
//               This includes {course.lectures} on-demand video lectures, quizzes, and a certificate of completion.
//             </p>
//             <button
//               onClick={handleBuy}
//               className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors duration-200"
//             >
//               Enroll Now
//             </button>
//             <div className="mt-4 text-center text-sm text-gray-500">
//               Money-back guarantee within 30 days.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaStar, FaUser, FaClock, FaCheckCircle } from "react-icons/fa";

// --- TEMPORARY COURSE DATA (expanded for detail) ---
const allCourses = {
  1: {
    title: "React for Beginners",
    desc: "A comprehensive course to build your first React applications from scratch. Covers components, state, props, and hooks.",
    price: 499,
    rating: 4.5,
    students: 1250,
    duration: "10 hours",
    lectures: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-53018e698188?q=80&w=2080&auto=format&fit=crop",
    whatYoullLearn: [
      "Understand the core concepts of React",
      "Build dynamic and interactive UIs",
      "Use React Hooks like useState and useEffect",
      "Manage component state and props effectively",
    ],
  },
  2: {
    title: "Node.js Mastery",
    desc: "Deep dive into building scalable backend APIs with Node.js and Express. Learn about middleware, database integration, and security.",
    price: 699,
    rating: 4.8,
    students: 850,
    duration: "15 hours",
    lectures: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1610484555896-1c20e24e69b2?q=80&w=2070&auto=format&fit=crop",
    whatYoullLearn: [
      "Create a RESTful API with Node.js and Express",
      "Connect to MongoDB databases",
      "Implement user authentication and authorization",
      "Deploy your Node.js application to the cloud",
    ],
  },
  3: {
    title: "Data Structures in JS",
    desc: "Master essential data structures and algorithms using JavaScript. This course will prepare you for technical interviews.",
    price: 399,
    rating: 4.2,
    students: 2100,
    duration: "8 hours",
    lectures: 35,
    imageUrl:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1961&auto=format&fit=crop",
    whatYoullLearn: [
      "Implement common data structures like arrays, lists, and trees",
      "Analyze algorithm efficiency with Big O notation",
      "Solve complex problems using algorithms",
      "Prepare for coding interviews with confidence",
    ],
  },
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = allCourses[courseId];
  const { user } = useAuth();
  const navigate = useNavigate();

 const handleBuy = () => {
  if (!user) {
    // Save the intended redirect (checkout page) before login
    navigate("/login", { state: { from: `/checkout/${courseId}` } });
  } else {
    navigate(`/checkout/${courseId}`);
  }
};


  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-2xl font-semibold text-red-500">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="container mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Course Header Section with Image */}
        <div className="relative h-64 md:h-96">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 md:p-10">
            <div className="text-white">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
                {course.title}
              </h1>
              <p className="text-md md:text-lg mb-4 max-w-2xl">{course.desc}</p>

              {/* Star Rating and Info */}
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-yellow-400 font-bold">
                  <FaStar className="mr-1" />
                  {course.rating.toFixed(1)} Rating
                </span>
                <span className="flex items-center text-gray-200">
                  <FaUser className="mr-1" />
                  {course.students.toLocaleString()} Students
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content and Sidebar Layout */}
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Main Description and "What You'll Learn" */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Course Details
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{course.desc}</p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              What You'll Learn
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              {course.whatYoullLearn.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar/Call-to-Action Card */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg border border-gray-200 shadow-lg md:sticky md:top-8 md:self-start">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-gray-800">
                ₹{course.price}
              </h4>
              <div className="flex items-center text-sm text-gray-500">
                <FaClock className="mr-1" />
                <span>{course.duration}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              This includes {course.lectures} on-demand video lectures, quizzes,
              and a certificate of completion.
            </p>
            <button
              onClick={handleBuy}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              {user ? "Proceed to Checkout" : "Enroll Now"}
            </button>
            <div className="mt-4 text-center text-sm text-gray-500">
              Money-back guarantee within 30 days.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
