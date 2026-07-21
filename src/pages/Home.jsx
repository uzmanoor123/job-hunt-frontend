import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResumeCard from "../components/ResumeCard";
import JobSection from "../components/JobSection";
import ProfileCard from "../components/ProfileCard";
const Home = () => {
  return (
  <>
  <div className="bg-[#FAF8F5]"> 
  <Navbar />

  <div className="max-w-[1440px] mx-auto">
    <Hero />

    <div className="mt-8 flex items-start gap-6">
      <div className="w-[420px] shrink-0">
        <ResumeCard />
        <ProfileCard />
      </div>

      <div className="flex-1">
        <JobSection />
      </div>
    </div>
  </div>
  </div>
</>
  );
};

export default Home;
