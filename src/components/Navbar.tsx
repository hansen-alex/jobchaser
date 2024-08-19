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
    <nav className="w-full pt-8 pb-8 flex flex-row justify-between text-[#000000] hover:text-[#000000]">
      <h1>
        <Link to={"/"} className="text-inherit hover:text-inherit">
          Jobchaser&#8482;
        </Link>
      </h1>
      <ul className="flex flex-row space-x-4">
        <li>
          <Link to={"/jobs"} className="text-inherit hover:text-inherit">
            Jobs
          </Link>
        </li>
        {isAuthenticated ? (
          <li>
            <button
              className="bg-inherit	font-sans text-base text-inherit hover:text-inherit underline"
              type="button"
              onClick={() => handleSignOut(navigate)}
            >
              Sign out
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to={"/signup"} className="text-inherit hover:text-inherit">
                Sign up
              </Link>
            </li>
            <li>
              <Link to={"/signin"} className="text-inherit hover:text-inherit">
                Sign in
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
