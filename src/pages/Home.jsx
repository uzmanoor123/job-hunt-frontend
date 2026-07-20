import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResumeCard from "../components/ResumeCard";
import JobSection from "../components/JobSection";                    
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <div className= " mt-8 gap-8 ">
        <ResumeCard />
       <JobSection />
       </div> 
      </div>
    </>
  );
};

export default Home;
