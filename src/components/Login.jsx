import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../features/AuthSlice";

const Login = ({ setToggle }) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    let { email, password } = JSON.parse(localStorage.getItem("currentUser"));
    if (email === data.email && password === data.password) {
      dispatch(setUser(data));
      alert("User Logged in Successfully");
      navigate("/home");
    } else {
      alert("User not exist");
    }
    console.log("Login data:", data);
  };

  return (
    <div className="min-h-screen justify-center bg-[#02010A] text-white flex items-center px-6 lg:px-24">
      {/* Content wrapper (left aligned like the design) */}
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold mb-2">Welcome back</h1>
          <p className="text-sm text-gray-400">Sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-700 focus:border-gray-300 outline-none py-2 text-sm"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full bg-transparent border-b border-gray-700 focus:border-gray-300 outline-none py-2 text-sm"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="h-3 w-3 accent-white"
                {...register("remember")}
              />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-200 underline-offset-2 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-md bg-white text-black text-sm font-medium hover:bg-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 ml-33 text-xs text-gray-400">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => setToggle((prev) => !prev)}
            type="button"
            className="text-white hover:underline underline-offset-2"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
