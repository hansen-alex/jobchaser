import { useContext } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const handleSignOut = (navigate: NavigateFunction) => {
  try {
    signOut(auth);
    navigate("/signin");
  } catch (error) {
    console.log(error);
  }
};

export const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useContext(AuthenticationContext);

  return (
    <nav className="w-full pb-8">
      <h1>
        <Link to={"/"}>Jobchaser&#8482;</Link>
      </h1>
      <ul>
        <li>
          <Link to={"/jobs"}>Jobs</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <button type="button" onClick={() => handleSignOut(navigate)}>
              Sign out
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to={"/signup"}>Sign up</Link>
            </li>
            <li>
              <Link to={"/signin"}>Sign in</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
