import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppStore } from "../../stores/app-store";
import LoadingSpinner from "../LoadingSpinner";
import authenticate from "../../services/api/login";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  username: string;
  password: string;
}
export default function Login() {
  const setUserToken = useAppStore((state) => state.setUserToken);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
    delayError: 400,
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => mutate(data);

  // const [user, setUser] = useState<Inputs>({
  //   username: "",
  //   password: "",
  // });
  // function getUserData(e: React.ChangeEvent<HTMLInputElement>) {
  //   let myUser: Inputs = { ...user };
  //   const inputName = e.target.name as keyof Inputs;
  //   myUser[inputName] = e.target.value;
  //   setUser(myUser);
  // }

  const {
    isPending,
    error: queryError,
    mutate,
  } = useMutation({
    mutationFn: authenticate,
    onSuccess: (data) => {
      setUserToken(data.token);
      navigate("/");
    },
  });
  // const onInvalid = (errors) => {
  //   console.log(errors);
  // };
  if (isPending) {
    return (
      <div className="my-20 flex h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="mx-4 flex flex-col items-center justify-center py-24">
      <div className="w-full rounded-lg border border-gray-300 bg-white sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Sign in to your account
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                User name
              </label>

              <input
                placeholder="name@company.com"
                {...register("username", { required: "Password is required" })}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              />
              {errors.username && (
                <span className="text-sm text-red-600">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "password is required",

                    minLength: {
                      value: 4,
                      message: "Password must not exceed 4 characters",
                    },
                  })}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    required={false}
                  />
                </div>

                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <Link
                to="/"
                aria-label="Home-page"
                className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              name="submit"
              className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4"
            >
              Sign in
            </button>
            <p className="text-sm text-red-600">{queryError?.message}</p>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <Link
                to="/register"
                aria-label="register-page"
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
