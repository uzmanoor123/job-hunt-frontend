import { useEffect, useState } from "react";
const ProfileCard = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  if (!profile) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 mt-7">

      <h2 className="text-[22px] font-semibold text-[#23233F]">
        Profile
      </h2>
      <div className="mt-6">
        <p className="text-[12px] uppercase tracking-wide text-[#A5A2B8] font-semibold">
          Summary
        </p>

        <p className="mt-3 text-[15px] leading-8 text-[#5D5D74]">
          {profile.summary || 
          "Computer Science student with hands-on experience in web development."}
        </p>

      </div>
      <hr className="my-6 border-gray-200" />
      <div>

        <p className="text-[12px] uppercase tracking-wide text-[#A5A2B8] font-semibold">
          Skills
        </p>
        <div className="flex flex-wrap gap-2 mt-4">

          {
            profile.skills?.map((skill,index)=>(
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-[#F2F0FF] text-[#3F3A93] text-[13px] font-medium"
              >
                {skill}
              </span>
            ))
          }

        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div>
        <p className="text-[12px] uppercase tracking-wide text-[#A5A2B8] font-semibold">
          Experience
        </p>
        <div className="mt-4 space-y-3">
        {
          profile.experience?.length > 0 ? (
            profile.experience.map((exp,index)=>(
              <div 
                key={index}
                className="bg-[#F8F5EF] rounded-xl p-4"
              >
                <h3 className="font-semibold text-[#23233F]">
                  {exp.role}
                </h3>
                <p className="text-[#5D5D74] text-sm mt-1">
                  {exp.company}
                </p>
                <span className="text-[#A5A2B8] text-sm">
                  {exp.duration}
                </span>
                <p className="text-[#5D5D74] text-sm mt-2">
                  {exp.description}
                </p>
              </div>

            ))

          ) : (

            <p className="text-gray-400">
              No experience added
            </p>

          )
        }

        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div>
        <p className="text-[12px] uppercase tracking-wide text-[#A5A2B8] font-semibold">
          Education
        </p>
        <div className="mt-4 space-y-3">
        {
          profile.education?.map((edu,index)=>(
            <div
              key={index}
              className="bg-[#F8F5EF] rounded-xl p-4"
            >
              <h3 className="font-semibold text-[#23233F]">
                {edu.degree}
              </h3>
              <p className="text-[#5D5D74] text-sm mt-1">
                {edu.institute}
              </p>
              <span className="text-[#A5A2B8] text-sm">
                {edu.year}
              </span>
            </div>
          ))
        }
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      <div>

        <p className="text-[12px] uppercase tracking-wide text-[#A5A2B8] font-semibold">
          Projects
        </p>
        <div className="mt-4 space-y-3">
        {
          profile.projects?.map((project,index)=>(

            <div
              key={index}
              className="bg-[#F8F5EF] rounded-xl p-4"
            >

              <h3 className="font-semibold text-[#23233F]">
                {project.title}
              </h3>

              <p className="text-[#5D5D74] text-sm mt-1">
                {project.description}
              </p>
            </div>

          ))
        }

        </div>
      </div>
    </div>
  );
};
export default ProfileCard;