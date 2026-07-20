import { FiArrowUpRight } from "react-icons/fi";

const jobs = [
  {
    title: " Web Designer with HTML/CSS Skills UX, U",
    company: "OPTiMO Information Technology LLC",
    location: " Washington, US",
    type: " Not specified",
    description:
      "Web Designer with HTML/CSS Skills 💰 Salary: $66,000 - 106,000 per year At OPTiMO Information Technology LLC we are looking for a UX, UI engineer! 🛠️ Our tech stack: CSS, Support, JavaScript, MVC, ...",
  },
  {
    title: "Front End Developer (Java Script, HTML, CSS) III",
    company: "Judge Group, Inc.",
    location: "Washington, US",
    type: "Not specified",
    description:
      "Location: Washington, DC Salary: $60.00 USD Hourly - $65.00 USD Hourly Description: Our client is currently seeking a Front End Developer (Java Script, HTML, CSS) III Position Title: Front End Develo...",
  },
      {
        title: "Front End Developer (Java Script, HTML, CSS) III",
        company: "Judge Group, Inc.",
        location: "Washington, US",
        type: "Not specified",
        description: "Location: Washington, DC Salary: $60.00 USD Hourly - $65.00 USD Hourly Description: Our client is currently seeking a Front End Developer (Java Script, HTML, CSS) III Position Title: Front End Develo..."
    },
          {
        title: "Front End Developer (Java Script, HTML, CSS) III",
        company: "Judge Group, Inc.",
        location: "Washington, US",
        type: "Not specified",
        description: "Location: Washington, DC Salary: $60.00 USD Hourly - $65.00 USD Hourly Description: Our client is currently seeking a Front End Developer (Java Script, HTML, CSS) III Position Title: Front End Develo..."
    },
];
const JobSection = () => {
  return (
    <div className="flex-1 bg-white border border-gray-200 rounded-3xl p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[16px] font-semibold text-[#1B1B2F]">
          Matching jobs
        </h2>
        <span className="text-[#A5A2B8] text-sm">10 found</span>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 flex flex-col h-[340px] hover:shadow-md transition"
          >
            <h3 className="text-[14px] font-semibold text-[#23233F] leading-8">
              {job.title}
            </h3>

            <p className=" text-[#362F78] text-[14px] font-medium">
              {job.company}
            </p>

            <p className="text-[#9997A8] mt-1 text-[12px]">{job.location}</p>

            <p className="text-[#5B5A70] mt-1 text-[12px]">{job.type}</p>

            <p className="mt-3 text-[#5D5D74] leading-8 line-clamp-4 text-[14px] ">
              {job.description}
            </p>
            <button className="mt-6 w-full bg-[#3F3A93] text-white py-2 rounded-xl font-medium hover:bg-[#342F7D] transition hover:cursor-pointer flex items-center justify-center gap-1">
             
              Apply now
               <FiArrowUpRight  size = {20}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSection;
