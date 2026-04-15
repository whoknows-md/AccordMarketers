import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export default function AdminLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}