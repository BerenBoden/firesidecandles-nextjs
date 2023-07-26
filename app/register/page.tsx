"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "../components/common/elements/Button";
import { useRouter } from "next/navigation";
import { api } from "@/app/store/api";

type FormData = {
  fullName: string;
  lastName: string;
  identifier: string;
  password: string;
};

type Errors = {
  data: any;
  error: {
    details: {
      errors: ErrorOption[];
      message: any;
    };
  };
};

interface ErrorOption {
  type: string;
  message: any;
  path: [string];
}

interface ErrorDetail {
  message: string;
  path: any;
}

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    shouldUnregister: true,
    defaultValues: {
      fullName: "",
      identifier: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    {
      /**Todo: Make type for login response */
    }
    const response: any = api.endpoints.postRegister.initiate({ body: data });
    const error: Errors = JSON.parse(response.error);
    if (error) {
      if (!Array.isArray(error.error.details.errors)) {
        setError("identifier", {
          type: "manual",
          message: "Email is required",
        } as ErrorOption);
        setError("fullName", {
          type: "manual",
          message: "First name is required",
        } as ErrorOption);
        setError("password", {
          type: "manual",
          message: "Password is required",
        } as ErrorOption);
      } else {
        error.error.details.errors.map((error: ErrorDetail) => {
          setError(error.path.join("."), {
            type: "manual",
            message: error.message,
          });
        });
      }
    } else {
      router.push("/dashboard");
    }
  };
  return (
    <div className="flex min-h-full flex-1 max-w-7xl mx-auto xl:px-0 px-8 my-12">
      <div className="mx-auto w-1/2">
        <div>
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register for an account
          </h2>
          <p className="text-xs text-gray-600">
            Register today and get 15% off your first order.
          </p>
        </div>

        <div className="mt-10">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="fullNameSign in"
                  className={`block text-sm font-medium leading-6 text-gray-900 ${
                    errors.fullName ? "text-red-500" : ""
                  }`}
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="fullName"
                    {...register("fullName")}
                    name="fullName"
                    className={`block w-full  p-2 border shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                      errors.fullName ? "border-red-500" : ""
                    }`}
                  />
                  <p
                    className={`h-4 capitalize text-xs italic mt-2 text-red-500 ${
                      errors.fullName ? "visible" : "invisible"
                    }`}
                  >
                    {typeof errors.fullName?.message === "object"
                      ? (errors.fullName?.message as { message: string })
                          .message
                      : errors.fullName?.message}
                  </p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="identifier"
                  className={`block text-sm font-medium leading-6 text-gray-900 ${
                    errors.identifier ? "text-red-500" : ""
                  }`}
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="identifier"
                    {...register("identifier")}
                    name="identifier"
                    className={`block w-full  p-2 border shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                      errors.identifier ? "border-red-500" : ""
                    }`}
                  />
                  <p
                    className={`h-4 capitalize text-xs italic mt-2 text-red-500 ${
                      errors.identifier ? "visible" : "invisible"
                    }`}
                  >
                    {typeof errors.identifier?.message === "object"
                      ? (errors.identifier?.message as { message: string })
                          .message
                      : errors.identifier?.message}
                  </p>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium leading-6 text-gray-900 ${
                    errors.password ? "text-red-500" : ""
                  }`}
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    {...register("password")}
                    name="password"
                    className={`block w-full p-2 border shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  <p
                    className={` h-4 capitalize text-xs italic mt-2 text-red-500 ${
                      errors.password ? "visible" : "invisible"
                    }`}
                  >
                    {typeof errors.password?.message === "string" &&
                      errors.password?.message}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-black focus:ring-gray-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-black hover:text-gray-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="flex w-full justify-center px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-white border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Link
                href="/"
                className="flex w-full items-center justify-center gap-3 bg-white px-3 py-1.5 border text-blak focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 256 262"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  />
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  />
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  />
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  />
                </svg>
                <span className="text-sm font-semibold leading-6">Google</span>
              </Link>

              <Link
                href="/"
                className="flex w-full items-center justify-center gap-3 bg-blue-500 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
              >
                <svg
                  className="w-4 h-4 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm font-semibold leading-6">
                  Facebook
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{/*Todo*/}