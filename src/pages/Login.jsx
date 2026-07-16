import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-orange-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-5 rounded max-w-md w-full"
      >
        <img src={logo} alt="logo" className="w-36 mb-8" />
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="text-[#5B5A70] mt-2 mb-8">
          Log in to see your latest job matches.
        </p>

        <div className="mb-4">
          <label className="font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>
        <div className="mb-5">
          <label className="font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#E07A37] hover:bg-[#cf6d2f] text-white py-3 rounded-xl font-semibold transition"
        >
          Log in
        </button>
        <p className="text-center mt-5 text-[#5B5A70]">
          Don't have an account?
          <Link
            to="/register"
            className="text-[#362F78] font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;