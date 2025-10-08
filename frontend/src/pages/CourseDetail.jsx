import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const { courseId } = useParams(); // courseId from route /courses/:courseId
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/courses/${courseId}`); // ✅ query param instead of route param
        console.log(res);
        if (!res.ok) throw new Error("Failed to fetch course details");
        
        const data = await res.json();
        console.log(data);
        setCourse(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) return <p className="text-center mt-10">Loading course details...</p>;
  if (!course) return <p className="text-center mt-10">Course not found.</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Course Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-600">{course.description}</p>
      </div>

      {/* Thumbnail */}
      {course.thumbnail && (
        <div className="flex justify-center mb-8">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="rounded-lg shadow-md max-h-96 object-cover"
          />
        </div>
      )}

      {/* Videos List */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Course Lectures</h2>

        {course.videos?.length > 0 ? (
          <ul className="space-y-3">
            {course.videos.map((video) => (
              <li
                key={video._id}
                className="p-3 border border-gray-200 rounded-lg flex justify-between items-center bg-white hover:shadow-sm transition"
              >
                <div>
                  <h3 className="font-medium">{video.title}</h3>
                  <p className="text-gray-500 text-sm">{video.description}</p>
                </div>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => navigate(`/learn/${course._id}?video=${video._id}`)}
                >
                  Watch Preview
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No videos available for this course yet.</p>
        )}
      </div>

      {/* Enroll Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate(`/checkout/${course._id}`)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
