// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">EdVantage</h1>
//       <nav className="space-x-6">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/programs">Programs</Link>
//         <Link to="/placements">Placements</Link>
//         <Link to="/events">Events</Link>
//         <Link
//           to="/elearning"
//           className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
//         >
//           E-Learning
//         </Link>
//       </nav>
//     </header>
//   );
// }




// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// --- Sub-Components for Link Groups ---

const WebsiteLinks = () => (
    <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/placements">Placements</Link>
        <Link to="/events">Events</Link>
        <Link
            to="/courses" // Changed from /elearning to match the LMS route
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
        >
            E-Learning
        </Link>
    </>
);

const LMSLinks = ({ user, logout }) => (
    <>
        <Link to="/">Main Home</Link> {/* 👈 Added Main Home link */}
        <Link to="/courses">All Courses</Link>
        {user ? (
            <>
                <Link to="/my-learning">My Learning</Link>
                <Link to="/profile">Profile</Link>
                <button
                    onClick={logout}
                    className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </>
        ) : (
            <>
                <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
                <Link to="/signup" className="ml-4 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Signup</Link>
            </>
        )}
    </>
);

// --- Main Header Component ---

export default function Header() {
    const location = useLocation();
    const { user, logout } = useAuth();

    // Determine if the user is on an LMS-specific route
    const isLMSPath = location.pathname.startsWith("/courses") || 
                     location.pathname.startsWith("/checkout") || 
                     location.pathname.startsWith("/my-learning") || 
                     location.pathname.startsWith("/profile");

    const headerClasses = isLMSPath 
        ? "bg-white shadow text-gray-800" // LMS style
        : "bg-gray-800 text-white";       // Website style

    const linkClasses = isLMSPath ? "text-gray-600 hover:text-gray-800" : "hover:text-gray-300";

    return (
        <header className={`${headerClasses} px-6 py-4 flex justify-between items-center`}>
            <h1 className="text-xl font-bold">
                <Link to={isLMSPath ? "/courses" : "/"} className={isLMSPath ? "text-blue-600" : "text-white"}>
                    {isLMSPath ? "E-Learning" : "EdVantage"}
                </Link>
            </h1>
            <nav className={`space-x-6 ${linkClasses}`}>
                {isLMSPath ? (
                    <LMSLinks user={user} logout={logout} />
                ) : (
                    <WebsiteLinks />
                )}
            </nav>
        </header>
    );
}

// NOTE: You can now delete your LMSHeader.jsx file and use this unified Header.jsx