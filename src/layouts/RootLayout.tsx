import { Navbar } from "../components/Navbar.tsx";
import { Outlet } from "react-router-dom";
import { AuthenticationProvider } from "../context/AuthenticationContext.tsx";

function RootLayout() {
  return (
    <AuthenticationProvider>
      <Navbar />
      <Outlet />
    </AuthenticationProvider>
  );
}

export default RootLayout;
