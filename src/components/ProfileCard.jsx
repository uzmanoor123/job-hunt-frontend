const ProfileCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 mt-7">
      <h2 className="text-[22px] font-semibold text-[#23233F]">Profile</h2>
      <div className="mt-6">
        <p className="text-[12px] uppercase tracking-wide text-[#A5A2B8] font-semibold">
          Summary
        </p>
        <p className="mt-3 text-[15px] leading-8 text-[#5D5D74]">
          As a Computer Science student with hands-on experience in web
          development using HTML, CSS, JavaScript, MySQL and PHP. I have worked
          on academic projects focused on real-world problem solving and am
          eager to gain industry level experience and enhance my technical
          skills.
        </p>
      </div>
      <hr className="my-6 border-gray-200" />
      <div>
        <p className="text-[12px] uppercase tracking-wide text-[#A5A2B8] font-semibold">
          Skills
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL",
            "PHP",
            "Object-Oriented Programming (OOP)",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-[#F2F0FF] text-[#3F3A93] text-[13px] font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div>
        <p className="text-[12px] uppercase tracking-wide text-[#A5A2B8] font-semibold">
          Experience
        </p>   
        <div className="mt-4 h-5 rounded-lg bg-[#F5F2EC]"></div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div>
        <p className="text-[12px] uppercase tracking-wide text-[#A5A2B8] font-semibold">
          Education
        </p>
        <div className="mt-4 space-y-3">
          <div className="bg-[#F8F5EF] rounded-xl p-4">
            <h3 className="font-semibold text-[#23233F]">
              BS Computer Science
            </h3>

            <p className="text-[#5D5D74] text-sm mt-1">Virtual University</p>

            <span className="text-[#A5A2B8] text-sm">2023 - 2026</span>
          </div>

          <div className="bg-[#F8F5EF] rounded-xl p-4">
            <h3 className="font-semibold text-[#23233F]">Intermediate (ICS)</h3>

            <p className="text-[#5D5D74] text-sm mt-1">Punjab College</p>

            <span className="text-[#A5A2B8] text-sm">2020 - 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
