// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function LMSHeader() {
//   const { user, logout } = useAuth();

//   return (
//     <header className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">E-Learning</h1>
//       <nav className="space-x-6">
//         <Link to="/elearning">Courses</Link>
//         {user ? (
//           <>
//             <Link to="/my-learning">My Learning</Link>
//             <Link to="/profile">Profile</Link>
//             <button
//               onClick={logout}
//               className="bg-red-600 px-3 py-1 rounded hover:bg-red-500"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link
//               to="/signup"
//               className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-400"
//             >
//               Signup
//             </Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }



import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LMSHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/courses" className="text-xl font-bold">
        E-Learning
      </Link>
      <nav className="space-x-4">
        <Link to="/courses">Courses</Link>
        {user && (
          <>
            <Link to="/my-learning">My Learning</Link>
            <Link to="/profile">Profile</Link>
            <button
              onClick={logout}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
