// src/pages/CoursePlayer.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

export default function CoursePlayer() {
    const { courseId } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    
    const [course, setCourse] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    const lectureId = searchParams.get('lecture');

    useEffect(() => {
        const checkAccessAndLoad = async () => {
            if (!user) {
                // ProtectedRoute should handle this, but as a safeguard:
                navigate('/login', { state: { from: location.pathname } });
                return;
            }

            try {
                // 1. Check Enrollment Status (Critical step for protected content)
                const accessRes = await fetch(`/api/courses/${courseId}/access`, {
                    headers: { 'Authorization': `Bearer ${user.token}` } 
                });
                const { hasAccess } = await accessRes.json();
                
                if (!hasAccess) {
                    setIsEnrolled(false);
                    setIsLoading(false);
                    return; 
                }
                
                setIsEnrolled(true);

                // 2. Fetch Course Details (with full video URLs for playback)
                const courseRes = await fetch(`/api/courses/${courseId}?access=full`, {
                     headers: { 'Authorization': `Bearer ${user.token}` } 
                });
                const courseData = await courseRes.json();
                setCourse(courseData);

                // 3. Set Current Video
                const initialVideo = courseData.videos.find(v => v._id === lectureId) || courseData.videos[0];
                setCurrentVideo(initialVideo);

            } catch (error) {
                console.error("Error loading course content:", error);
            } finally {
                setIsLoading(false);
            }
        };

        checkAccessAndLoad();
    }, [courseId, user, lectureId, navigate]);

    if (isLoading) return <div className="p-10 text-center">Loading course content...</div>;
    
    if (!isEnrolled) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl text-red-600 mb-4">Access Denied</h2>
                <p className="mb-6">You must purchase this course to view the content.</p>
                <button 
                    onClick={() => navigate(`/courses/${courseId}`)}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Go to Course Details
                </button>
            </div>
        );
    }
    
    if (!course || !currentVideo) return <div className="p-10 text-center">Course structure error.</div>;

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Left: Video Player */}
            <div className="flex-grow p-4">
                <div className="aspect-video bg-black rounded-lg mb-4">
                    {/* Placeholder for your actual Video Player component (e.g., using video.js or a simple <video> tag) */}
                    <h2 className="text-white p-4">Now Playing: {currentVideo.title}</h2>
                    {/* Example Video Tag (replace with your secure player) */}
                    <video controls src={currentVideo.url} className="w-full h-full object-contain"></video>
                </div>
                <h1 className="text-2xl font-bold">{currentVideo.title}</h1>
                <p className="text-gray-600 mt-2">{currentVideo.description}</p>
            </div>

            {/* Right: Lecture Navigation Sidebar */}
            <div className="w-80 bg-gray-100 p-4 overflow-y-auto border-l">
                <h3 className="text-xl font-semibold mb-4 sticky top-0 bg-gray-100 py-2">Course Modules</h3>
                {course.videos.map((video, index) => (
                    <div 
                        key={video._id} 
                        onClick={() => setCurrentVideo(video)}
                        className={`p-3 rounded-lg mb-2 cursor-pointer transition ${
                            currentVideo._id === video._id ? 'bg-blue-200 border-blue-500 border-2' : 'hover:bg-gray-200'
                        }`}
                    >
                        <p className="font-medium">Lecture {index + 1}:</p>
                        <p className="text-sm">{video.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}