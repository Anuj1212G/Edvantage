import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WebsiteLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />  {/* 👈 this is where nested routes like Home, About, etc. render */}
      </main>
      <Footer />
    </>
  );
}
