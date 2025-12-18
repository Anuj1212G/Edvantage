// import { useState, useMemo } from "react";
// import { Link } from "react-router-dom";
// import { FaSearch, FaStar } from "react-icons/fa"; // Using react-icons for a professional touch

// // --- TEMPORARY COURSE DATA ---
// const allCourses = [
//   { id: "68e2b22a287c8fa94bc84341", title: "React for Beginners", category: "Web Dev", price: 499, rating: 4.5 },
//   { id: 2, title: "Node.js Mastery", category: "Backend", price: 699, rating: 4.8 },
//   { id: 3, title: "Data Structures in JS", category: "DSA", price: 399, rating: 4.2 },
//   { id: 4, title: "Full-Stack MERN App", category: "Web Dev", price: 899, rating: 4.9 },
//   { id: 5, title: "Python for Data Science", category: "Data Science", price: 549, rating: 4.6 },
//   { id: 6, title: "Advanced CSS & Sass", category: "Web Dev", price: 299, rating: 4.7 },
//   { id: 7, title: "GraphQL & Apollo Server", category: "Backend", price: 750, rating: 4.4 },
//   { id: 8, title: "Algorithms: The Complete Guide", category: "DSA", price: 450, rating: 4.1 },
//   { id: 9, title: "Machine Learning with Python", category: "Data Science", price: 999, rating: 5.0 },
// ];

// export default function Elearning() {
//   const [filters, setFilters] = useState({
//     category: "All",
//     priceRange: "All",
//     searchQuery: "",
//   });

//   const handleFilterChange = (key, value) => {
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [key]: value,
//     }));
//   };

//   // Memoize the filtered courses to optimize performance
//   const filteredCourses = useMemo(() => {
//     return allCourses.filter(course => {
//       // Category filter
//       const categoryMatch = filters.category === "All" || course.category === filters.category;

//       // Price filter
//       const priceMatch = () => {
//         switch (filters.priceRange) {
//           case "Free":
//             return course.price === 0;
//           case "Paid":
//             return course.price > 0;
//           case "Under 500":
//             return course.price < 500;
//           case "500+":
//             return course.price >= 500;
//           default:
//             return true;
//         }
//       };

//       // Search bar filter (case-insensitive)
//       const searchMatch = course.title.toLowerCase().includes(filters.searchQuery.toLowerCase());

//       return categoryMatch && priceMatch() && searchMatch;
//     });
//   }, [filters]);

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       <header className="bg-white shadow p-6">
//         <h2 className="text-3xl font-extrabold text-center text-indigo-700">Explore Courses</h2>
//       </header>
      
//       <div className="container mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
//         {/* --- Advanced Filters Sidebar --- */}
//         <div className="w-full md:w-1/4 p-6 bg-white rounded-lg shadow-md border border-gray-200 sticky top-4 self-start">
//           <h3 className="text-xl font-bold mb-4 text-gray-700">Filter Courses</h3>
          
//           {/* Search Bar */}
//           <div className="relative mb-6">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <FaSearch className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search by title..."
//               value={filters.searchQuery}
//               onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
//               className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="mb-6">
//             <h4 className="text-lg font-semibold mb-2">Category</h4>
//             {["All", "Web Dev", "Backend", "DSA", "Data Science"].map(cat => (
//               <button
//                 key={cat}
//                 onClick={() => handleFilterChange("category", cat)}
//                 className={`w-full text-left px-4 py-2 my-1 rounded-md transition-colors duration-200 ${
//                   filters.category === cat ? "bg-indigo-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Price Filter */}
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Price</h4>
//             {["All", "Free", "Paid", "Under 500", "500+"].map(priceOption => (
//               <button
//                 key={priceOption}
//                 onClick={() => handleFilterChange("priceRange", priceOption)}
//                 className={`w-full text-left px-4 py-2 my-1 rounded-md transition-colors duration-200 ${
//                   filters.priceRange === priceOption ? "bg-indigo-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {priceOption}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* --- Courses Grid --- */}
//         <div className="w-full md:w-3/4">
//           <h3 className="text-2xl font-bold mb-6 text-gray-700">
//             {filteredCourses.length} Course{filteredCourses.length !== 1 ? "s" : ""} Found
//           </h3>
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCourses.length > 0 ? (
//               filteredCourses.map(course => (
//                 <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200">
//                   <div className="p-6">
//                     <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
//                       {course.category}
//                     </span>
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">{course.title}</h3>
//                     <div className="flex items-center mb-4">
//                       <div className="flex text-yellow-400 text-sm mr-2">
//                         {Array.from({ length: 5 }, (_, i) => (
//                           <FaStar key={i} className={i < Math.floor(course.rating) ? "" : "text-gray-300"} />
//                         ))}
//                       </div>
//                       <span className="text-sm font-semibold text-gray-500">{course.rating.toFixed(1)}</span>
//                     </div>
//                     <p className="text-2xl font-bold text-gray-900 mb-4">₹{course.price}</p>
//                     <Link
//                       to={`/courses/${course.id}`}
//                       className="w-full block text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
//                     >
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-gray-500 text-lg col-span-full">No courses found matching your criteria. 😥</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








// frontend/src/pages/Elearning.jsx
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaStar, FaSpinner, FaExclamationTriangle } from "react-icons/fa";

export default function Elearning() {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: "All",
    searchQuery: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("https://edvantage-pryf.onrender.com/api/courses");
        if (!res.ok) throw new Error("Failed to fetch courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // ✅ Apply filters (category, price, search)
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const categoryMatch =
        filters.category === "All" || course.category === filters.category;

      const priceMatch = (() => {
        switch (filters.priceRange) {
          case "Free":
            return course.price === 0;
          case "Paid":
            return course.price > 0;
          case "Under 500":
            return course.price < 500;
          case "500+":
            return course.price >= 500;
          default:
            return true;
        }
      })();

      const searchMatch = course.title
        ?.toLowerCase()
        .includes(filters.searchQuery.toLowerCase());

      return categoryMatch && priceMatch && searchMatch;
    });
  }, [filters, courses]);

  // ✅ Loading and error handling
  if (loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <FaSpinner className="animate-spin text-indigo-600 text-4xl mb-3" />
        <p className="text-lg font-medium">Loading courses...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-500">
        <FaExclamationTriangle className="text-4xl mb-3" />
        <p className="text-lg font-semibold">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow p-6">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700">
          Explore Courses
        </h2>
      </header>

      <div className="container mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* --- Sidebar Filters --- */}
        <aside className="w-full md:w-1/4 p-6 bg-white rounded-xl shadow-md border border-gray-200 sticky top-6 self-start">
          <h3 className="text-xl font-bold mb-4 text-gray-700">
            Filter Courses
          </h3>

          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by title..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Category</h4>
            {["All", "Web Dev", "Backend", "DSA", "Data Science"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange("category", cat)}
                className={`w-full text-left px-4 py-2 my-1 rounded-md transition-all duration-200 ${
                  filters.category === cat
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Price</h4>
            {["All", "Free", "Paid", "Under 500", "500+"].map((price) => (
              <button
                key={price}
                onClick={() => handleFilterChange("priceRange", price)}
                className={`w-full text-left px-4 py-2 my-1 rounded-md transition-all duration-200 ${
                  filters.priceRange === price
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {price}
              </button>
            ))}
          </div>
        </aside>

        {/* --- Main Content --- */}
        <main className="w-full md:w-3/4">
          <h3 className="text-2xl font-bold mb-6 text-gray-700">
            {filteredCourses.length} Course
            {filteredCourses.length !== 1 ? "s" : ""} Found
          </h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div
                  key={course._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200"
                >
                  <div className="relative">
                    <img
                      src={
                        course.thumbnail ||
                        "https://via.placeholder.com/400x200?text=Course+Thumbnail"
                      }
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                      {course.category || "General"}
                    </span>

                    <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                      {course.title}
                    </h3>

                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 text-sm mr-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < Math.floor(course.rating || 4)
                                ? ""
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-500">
                        {(course.rating || 4.5).toFixed(1)}
                      </span>
                    </div>

                    <p className="text-2xl font-bold text-gray-900 mb-4">
                      ₹{course.price || 0}
                    </p>

                    <Link
                      to={`/courses/${course._id}`}
                      className="block text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg col-span-full">
                No courses found matching your filters. 😥
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
