import { Outlet } from "react-router-dom";
import LMSHeader from "../components/LMSHeaders";  // 👈 make this a new navbar for LMS

export default function LMSLayout() {
  return (
    <>
      <LMSHeader />
      <main className="min-h-screen bg-gray-50">
        <Outlet />  {/* 👈 nested LMS pages like Courses, Profile will render here */}
      </main>
    </>
  );
}
