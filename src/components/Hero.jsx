const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-5">
            <h1 className="text-4xl font-semibold text-[#23233F] mt-5">
                Welcome back, tester
            </h1>
            <p className="mt-2 text-xl text-[#6C6C80] max-w-3xl leading-8">
                Upload your CV once — we'll pull out your skills and keep matching jobs
                against it.
            </p>
            <div className="flex items-center mt-10">
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-[#3F3A93]"></div>
                    <span className="ml-2 font-medium text-gray-700">Upload</span>
                </div>
                <div className="w-20 border-t-2 border-dashed border-[#D8CDBF] mx-4"></div>
            
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-[#E68A42]"></div>
                    <span className="ml-2 font-medium text-gray-700">Analyze</span>
                </div>
                <div className="w-20  border-t-2 border-dashed border-[#D8CDBF] mx-4 "></div>
         
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-[#2CB67D]"></div>
                    <span className="ml-2 font-medium text-gray-700">Match</span>
                </div>
            </div>

        </div>
    );
};

export default Hero;
