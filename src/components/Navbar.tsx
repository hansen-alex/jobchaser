import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full pb-8">
      <h1>
        <Link to={"/"}>Jobchaser&#8482;</Link>
      </h1>
      <ul>
        <li>
          <Link to={"/jobs"}>Jobs</Link>
        </li>
        <li>
          <Link to={"/signin"}>Sign in</Link>
        </li>
        <li>
          <Link to={"/signup"}>Sign up</Link>
        </li>
        {/*TODO: Signout button when signed in, also hide register & signin ofc*/}
      </ul>
    </nav>
  );
};
