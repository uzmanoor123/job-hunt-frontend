import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BASE_URL } from "../config/envConfig";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit =  async(e) => {
    e.preventDefault();
     try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className=" p-5 rounded max-w-md w-full">
        <img src={logo} alt="logo" className="w-36 mb-8" />
        <h2 className="text-2xl font-semibold ">Create Your Account</h2>
        <p className="text-[#5B5A70] mt-2 mb-8">
          it takes time less than a minute
        </p>
        <div className="mb-4 mt-7">
          <label>Name</label>
          <input
            className=" p-2 bg-white w-full mt-2 px-9 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
            type="text"
            placeholder="johnDoe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            bg-white
          />
        </div>
        <div className="mb-4  mt-4">
          <label>Email</label>
          <input
            className="p-2 bg-white w-full mt-2 px-9 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 "
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 mt-4">
          <label>Password</label>
          <input
            className="p-2 bg-white w-full mt-2 px-9 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
            type="password"
            placeholder="Atleast 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#E07A37] w-full text-[#FFFFFF] p-3 rounded-xl mt-3 cursor-pointer border  "
        >
          Create Account
        </button>
        <p className="text-center mt-2">
          Already have an account?
          <Link to="/login" className="text-[#362F78] font-medium">
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
