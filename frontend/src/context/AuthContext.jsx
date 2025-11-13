// // frontend/src/context/AuthContext.jsx// src/context/AuthContext.jsx
// // import { createContext, useContext, useState, useEffect } from "react";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //    const [redirectPath, setRedirectPath] = useState(null); // NEW STATE
// //     const setRedirect = (path) => {
// //     setRedirectPath(path);
// //   };
  
// //   const [user, setUser] = useState(() => {
// //     const storedUser = localStorage.getItem("user");
// //     return storedUser ? JSON.parse(storedUser) : null;
// //   });
// //   const [token, setToken] = useState(() => localStorage.getItem("token") || null);

// //   // Login function stores user & token
// //   const login = (userData, jwtToken) => {
// //     setUser(userData);
// //     setToken(jwtToken);
// //     localStorage.setItem("user", JSON.stringify(userData));
// //     localStorage.setItem("token", jwtToken);
// //   };

// //   // Logout function clears storage
// //   const logout = () => {
// //     setUser(null);
// //     setToken(null);
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("token");
// //   };

// //   // Load user and token from localStorage on mount
// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("user");
// //     const storedToken = localStorage.getItem("token");
// //     if (storedUser && storedToken) {
// //       setUser(JSON.parse(storedUser));
// //       setToken(storedToken);
// //     }
// //   }, []);

// //   return (
// //     <AuthContext.Provider value={{ user, token, login, logout, redirectPath, setRedirect }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);


// // src/context/AuthContext.jsx
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedToken = localStorage.getItem("token");
//     if (storedUser && storedToken) {
//       setUser(JSON.parse(storedUser));
//       setToken(storedToken);
//     }
//     setLoading(false);
//   }, []);

//   const login = (userData, jwtToken) => {
//     setUser(userData);
//     setToken(jwtToken);
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("token", jwtToken);
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

const AuthContext = createContext({
  user: null,
  token: null,
  loading: true,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
  setUserFromServer: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // On mount, optionally try to get session from server (if you're using cookie-based session)
  useEffect(() => {
    (async () => {
      try {
        // attempt to get /api/auth/me to detect server cookie session
        const res = await fetch("https://edvantage-pryf.onrender.com/api/auth/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          if (data?.user) {
            setUser(data.user);
            // if server returns token optionally
            if (data.token) {
              setToken(data.token);
              localStorage.setItem("token", data.token);
            }
            localStorage.setItem("user", JSON.stringify(data.user));
          }
        }
      } catch (e) {
        // ignore
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // helper: persist user/token
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  // login using your backend
  const login = async (email, password) => {
    const res = await fetch("https://edvantage-pryf.onrender.com/api/auth/login", {
      method: "POST",
      credentials: "include", // keep for cookie-based
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    // server might return user and token or set HTTP-only cookie
    if (data.user) {
      setUser(data.user);
      if (data.token) setToken(data.token);
    } else if (data.token) {
      // if only token returned, decode user later or call /me
      setToken(data.token);
    } else {
      // if server used cookie only, call /api/auth/me
      const me = await fetch("/api/auth/me", { credentials: "include" });
      if (me.ok) {
        const meData = await me.json();
        if (meData.user) setUser(meData.user);
      }
    }
    return { user: data.user ?? null, token: data.token ?? null };
  };

  // signup using your backend
  const signup = async (name, email, password) => {
    const res = await fetch("https://edvantage-pryf.onrender.com/api/auth/register", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Signup failed");

    if (data.user) {
      setUser(data.user);
      if (data.token) setToken(data.token);
    } else {
      // attempt to read /me if cookie-based
      try {
        const me = await fetch("/api/auth/me", { credentials: "include" });
        if (me.ok) {
          const meData = await me.json();
          if (meData.user) setUser(meData.user);
        }
      } catch {}
    }
    return { user: data.user ?? null, token: data.token ?? null };
  };

  // logout - clear frontend state and call server logout
  const logout = async () => {
    try {
      await fetch("https://edvantage-pryf.onrender.com/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {
      // ignore
    } finally {
      setUser(null);
      setToken(null);
    }
  };

  // helper to allow server-driven setUser (if you want to call set from outside)
  const setUserFromServer = (u) => setUser(u);

  const value = useMemo(
    () => ({ user, token, loading, login, signup, logout, setUserFromServer }),
    [user, token, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
