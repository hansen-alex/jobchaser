import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full pb-8">
      <h1>Jobchaser&#8482;</h1>
      <ul>
        <li>
          <Link to={"/jobs"}>Jobs</Link>
          <Link to={"/signin"}>Sign in</Link>
          <Link to={"/signup"}>Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};
