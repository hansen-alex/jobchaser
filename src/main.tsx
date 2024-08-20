import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import { ErrorPage } from "./routes/ErrorPage.tsx";
import { HomePage } from "./routes/HomePage.tsx";
import { JobsPage } from "./routes/JobsPage.tsx";
import { SignUpPage } from "./routes/SignupPage.tsx";
import { SignInPage } from "./routes/SigninPage.tsx";
import "./index.css";
import { AuthenticationContext } from "./context/AuthenticationContext.tsx";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return useContext(AuthenticationContext) ? (
    children
  ) : (
    <Navigate to="/signin" replace />
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
