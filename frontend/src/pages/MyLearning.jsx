// // src/pages/MyLearning.jsx
// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function MyLearning() {
//   const { token } = useAuth();
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEnrolledCourses = async () => {
//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       try {
//         const res = await fetch("http://localhost:5000/api/users/profile", {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         if (!res.ok) {
//           const errorData = await res.json();
//           throw new Error(errorData.message || "Failed to fetch courses");
//         }

//         const data = await res.json();
//         setCourses(data.enrolledCourses || []);
//       } catch (err) {
//         console.error(err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEnrolledCourses();
//   }, [token, navigate]);

//   if (loading) return <div className="p-6 text-gray-500">Loading courses...</div>;
//   if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">My Learning</h2>
//       {courses.length === 0 ? (
//         <p className="text-gray-700">You have not purchased any courses yet.</p>
//       ) : (
//         <ul className="space-y-3">
//           {courses.map(course => (
//             <li 
//               key={course._id} 
//               className="p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 cursor-pointer transition"
//               onClick={() => navigate(`/courses/${course._id}`)}
//             >
//               <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
//               {course.description && <p className="text-gray-600">{course.description}</p>}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MyLearning() {
  const { token, loading: authLoading } = useAuth(); // include loading flag
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Don’t run until AuthContext has finished loading
    if (authLoading) return;

    // If no token after loading, redirect to login
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    const fetchEnrolledCourses = async () => {
      try {
        const res = await fetch("https://edvantage-pryf.onrender.com/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to fetch courses");
        }

        const data = await res.json();
        setCourses(data.enrolledCourses || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, [token, authLoading, navigate]);

  if (authLoading || loading)
    return <div className="p-6 text-gray-500">Loading courses...</div>;

  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">My Learning</h2>
      {courses.length === 0 ? (
        <p className="text-gray-700">You have not purchased any courses yet.</p>
      ) : (
        <ul className="space-y-3">
          {courses.map((course) => (
            <li
              key={course._id}
              className="p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 cursor-pointer transition"
              onClick={() => navigate(`/courses/${course._id}`)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
              {course.description && (
                <p className="text-gray-600">{course.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
