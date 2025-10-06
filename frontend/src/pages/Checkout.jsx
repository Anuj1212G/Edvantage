import { useParams } from "react-router-dom";

export default function Checkout() {
  const { courseId } = useParams();

  const handlePurchase = () => {
    alert(`Course ${courseId} purchased successfully!`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Checkout for Course {courseId}</h2>
      <button onClick={handlePurchase} className="bg-green-500 text-white px-4 py-2 mt-4">
        Confirm Purchase
      </button>
    </div>
  );
}
