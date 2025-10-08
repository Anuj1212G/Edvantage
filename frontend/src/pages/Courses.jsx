import CourseCard from "../components/course/CourseCard";
import CourseFilter from "../components/course/CourseFilter";

const sampleCourses = [
  { id: "68e2b22a287c8fa94bc84341", title: "React Basics", price: 499, description: "Learn React from scratch." },
  { id: 2, title: "Node.js Mastery", price: 699, description: "Backend development with Node.js." },
  { id: 3, title: "MongoDB Deep Dive", price: 399, description: "Master MongoDB NoSQL DB." }
];

export default function Courses() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">All Courses</h2>
      <CourseFilter />
      <div className="grid md:grid-cols-3 gap-4">
        {sampleCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
