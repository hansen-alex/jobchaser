import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { FirebaseError } from "firebase/app";

interface ISignInForm {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formSubmit = (data: ISignInForm) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        //TODO: handle login error messages
        console.log(error as FirebaseError);
      });
  };

  return (
    <>
      <form className="p-8 bg-gray-500" onSubmit={handleSubmit(formSubmit)}>
        <div className="flex flex-col pb-2">
          <label className="text-white" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="flex flex-col pb-6">
          <label className="text-white" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button className="w-full p-2" type="submit">
          Log in
        </button>
      </form>

      <Link to="/signup">Don't have an account? Sign Up</Link>
    </>
  );
};
