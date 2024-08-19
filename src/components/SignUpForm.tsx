import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

interface ISignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpForm>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const formSubmit = (data: ISignUpForm) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        //TODO: handle if email already registered
        if ((error as FirebaseError).code == "auth/email-already-in-use")
          console.log("Email already registered");
        else console.log(error);
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
            className="p-1"
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
          {errors.email && <span>{errors.email?.message}</span>}
        </div>

        <div className="flex flex-col pb-2">
          <label className="text-white" htmlFor="password">
            Password:
          </label>
          <input
            className="p-1"
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
          {errors.password && <span>{errors.password?.message}</span>}
        </div>

        <div className="flex flex-col pb-6">
          <label className="text-white" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            className="p-1"
            id="confirmPassword"
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword?.message}</span>
          )}
        </div>

        <button className="w-full p-2" type="submit">
          Register
        </button>
      </form>
      <Link to="/signin" className="text-inherit hover:text-inherit">
        Already have an account? Sign In
      </Link>
    </>
  );
};
