export default function MyLearning() {
  const purchasedCourses = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Node.js Mastery" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Learning</h2>
      {purchasedCourses.length === 0 ? (
        <p>You have not purchased any courses yet.</p>
      ) : (
        <ul className="list-disc pl-6">
          {purchasedCourses.map(c => (
            <li key={c.id}>{c.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
