import { Link, useNavigate } from "react-router-dom";
import backgroundPNG from "/Meteor.svg";
import { toast } from "sonner";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate()
  const containerStyle = {
    backgroundImage: `url(${backgroundPNG})`,
    backgroundRepeat: "repeat",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password conditions
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter");
      return;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return;
    }

    try {
      await createUser(email, password, name);
      toast.success("Account created successfully!");
      form.reset()
      navigate('/')
    } catch (error) {
      toast.error("Error creating account. Please try again.");
    }
  };

  const handleGoogleSingIn = () => {
    googleSignIn();
    navigate('/')
  };

  return (
    <div style={containerStyle} className="py-10">
      <div className="w-full bg-white max-w-md mx-auto p-8 space-y-3 rounded-xl shadow-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form noValidate="" onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1 text-base">
            <label htmlFor="name" className="block dark:text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-base">
            <label htmlFor="email" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-base">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>
          <button className="btn bt w-full text-white hover:bg-black bg-gray-800 hover:text-[#ff1949] font-bold text-base ms">
            Sign Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px bg-gray-700 sm:w-16 dark:bg-gray-700"></div>
          <p className="font-semibold text-base px-3 dark:text-gray-400">
            Sign up with social accounts
          </p>
          <div className="flex-1 bg-gray-700 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleSingIn}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-6 h-6 fill-current ln ms"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button
            aria-label="Log in with X"
            onClick={() => toast.error("This feature not available!")}
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-twitter-x ln ft"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
            </svg>
          </button>
          <button
            onClick={() => toast.error("This feature not available!")}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-6 h-6 fill-current ln ms"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-base font-semibold text-center text-gray-600 sm:px-6 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="ln ms font-bold text-gray-600 dark:text-gray-100 text-base"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
