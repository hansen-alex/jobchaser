import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthenticationProvider } from "../context/AuthenticationContext.tsx";
import { store } from "../store/store.ts";
import { Navbar } from "../components/Navbar.tsx";

function RootLayout() {
  return (
    <AuthenticationProvider>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </AuthenticationProvider>
  );
}

export default RootLayout;
