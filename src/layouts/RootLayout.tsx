import { Navbar } from "../components/Navbar.tsx";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;
