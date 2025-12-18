// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, token } = useAuth(); // Auth context with user & JWT token
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);


  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("https://edvantage-pryf.onrender.com/api/users/profile", {
          headers: { "Authorization": `Bearer ${token}` }
        });

        if (!res.ok) throw new Error("Failed to fetch profile");

        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchProfile();
  }, [token]);

  if (loading) return <div className="p-6 text-gray-500">Loading profile...</div>;
  if (!profile) return <div className="p-6 text-red-500">Failed to load profile.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">My Profile</h2>
      <div className="space-y-3">
        <p><span className="font-semibold text-gray-700">Name:</span> {profile.name}</p>
        <p><span className="font-semibold text-gray-700">Email:</span> {profile.email}</p>
        <p><span className="font-semibold text-gray-700">Role:</span> {profile.role}</p>
       
      </div>
    </div>
  );
}
