import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="bg-white border-b border-gray-200 ">
      <div className="max-w-7xl mx-auto px-3 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-28" />
          <h1 className="text-[#3D348B] font-semibold text-[16px]">
            Smart CV Analysis & Job Matching
          </h1>
        </div>

        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-1.5 bg-[#ECE9FF]   rounded-full px-2.5 py-2">
            <div className="w-6 h-6 rounded-full bg-[#3D348B] text-white flex justify-center items-center font-semibold">
              T
            </div>
            <span className="font-medium text-[#3D348B]">tester</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2  hover:bg-white hover:border-[#E07A37]  hover:text-[#E07A37] transition-all duration-300 hover:cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
