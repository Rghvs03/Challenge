import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../features/AuthSlice";

const Register = ({ setToggle }) => {
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setUser(data));

    console.log("Register data:", data);
    reset();
  };

  return (
    <div className="min-h-screen bg-[#02010A] text-white flex items-center justify-center px-4">
      {/* Card */}
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold mb-2">Create Account</h1>
          <p className="text-sm text-gray-400">Sign up to continue</p>
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
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm password */}
          <div className="space-y-1">
            <label className="text-sm text-gray-300">Confirm password</label>
            <input
              type="password"
              className="w-full bg-transparent border-b border-gray-700 focus:border-gray-300 outline-none py-2 text-sm"
              {...register("confirmPassword", {
                required: "Please confirm password",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">
                {errors.confirmPassword.message}
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
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Already have an account?{" "}
          <button
            onClick={() => setToggle((prev) => !prev)}
            type="button"
            className="text-white hover:underline underline-offset-2"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
