import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import { BASE_URL } from "../config/envConfig";
const UploadCV = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = async()=>{
    const formData = new FormData();
    formData.append("resume", selectedFile)
    const response = await fetch(
      `${BASE_URL}/upload`,
      {
        method: "POST",
        body: formData
      }
    );
    const data = await response.json()
    console.log(data)
  }
  return (
    <div className="w-[420px] flex-shrink-0 bg-white rounded-3xl border border-gray-200 p-6">
      <h2 className="text-[22px] font-semibold text-[#23233F]">Your CV</h2>
      <p className="text-[#6C6C80] mt-2 text-[16px]">PDF only, up to 10MB.</p>
      <label
        htmlFor="cv"
        className="mt-7 flex flex-col items-center justify-center border-2 border-dashed border-[#D9CCBE] rounded-2xl bg-[#F8F5EF] h-35 cursor-pointer hover:border-[#3F3A93] transition"
      >
        <div className="w-10 h-10 rounded-full bg-[#F0ECFF] flex items-center justify-center">
          <FiUpload className="text-2xl text-[#3F3A93]" />
        </div>
        {selectedFile ? (
          <>
            <p className="mt-4 text-lg font-medium text-[#23233F]">
              {selectedFile.name}
            </p>
          </>
        ) : (
          <>
            <p className="mt-4 text-lg font-medium text-[#23233F]">
              Drag your CV here, or{" "}
              <span className="underline text-[#3F3A93]">browse</span>
            </p>
            <span className="mt-2 text-[#9B9BA8]">PDF up to 10MB</span>
          </>
        )}
        <input
          type="file"
          id="cv"
          className="hidden"
          accept=".pdf"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </label>
      <button onClick={handleUpload}
        disabled={!selectedFile}
        className={`w-full mt-6 py-3 rounded-2xl font-semibold text-lg
                ${
                  selectedFile
                    ? "bg-[#E68A42] text-white hover:bg-[#d87b35] cursor-pointer"
                    : "text-[#9997A8] bg-[#D5CFC0] cursor-not-allowed "
                }`}
      >
        Upload & Analyze
      </button>
    </div>
  );
};

export default UploadCV;
