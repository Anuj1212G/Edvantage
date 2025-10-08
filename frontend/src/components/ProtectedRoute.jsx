// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
    const { user } = useAuth();
    const location = useLocation();

    // If no user is logged in, redirect them to the login page.
    if (!user) {
        // Pass the current location so they can be redirected back after login.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If logged in, render the child route component.
    return <Outlet />;
}