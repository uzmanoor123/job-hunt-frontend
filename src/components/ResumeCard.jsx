import { FiUpload } from "react-icons/fi";
const UploadCV = () => {
    return (
        <div className="max-w-[420px]  bg-white rounded-3xl border border-gray-200 p-6">
            <h2 className="text-[22px] font-semibold text-[#23233F]">Your CV</h2>
            <p className="text-[#6C6C80] mt-2 text-[16px]">PDF only, up to 10MB.</p>
            <label
                htmlFor="cv"
                className="mt-7 flex flex-col items-center justify-center border-2 border-dashed border-[#D9CCBE] rounded-2xl bg-[#F8F5EF] h-35 cursor-pointer hover:border-[#3F3A93] transition"
            >
                <div className="w-10 h-10 rounded-full bg-[#F0ECFF] flex items-center justify-center">
                    <FiUpload className="text-2xl text-[#3F3A93]" />
                </div>
                <p className="mt-4 text-lg font-medium text-[#23233F]">
                    Drag your CV here, or{" "}
                    <span className="underline text-[#3F3A93]">browse</span>
                </p>
                <span className="mt-2 text-[#9B9BA8]">PDF up to 10MB</span>
                <input type="file" id="cv" className="hidden" accept=".pdf" />
            </label>
            <button className="w-full mt-6 py-3 rounded-2xl bg-[#DDD4C5] text-[#9E9AB3] font-semibold text-lg">
                Upload & Analyze
            </button>
        </div>
    );
};

export default UploadCV;
