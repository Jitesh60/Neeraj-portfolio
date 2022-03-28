import react from "react";

function HomePage() {
    return (
        <div className="bg-gray-200 flex overflow-hidden p-16 justify-center items-between">
            <div className="p-5">
              <h1 className="text-xl bg-transparent text-red-500 mb-16">GET EVERY SINGLE SOLUTIONS.</h1>
                <h1 className=" text-7xl font-bold flex flex-col text-indigo-900 mb-16">I'm Developer
                    <span>Jitesh Bhatt</span> </h1>
                <p className="text-slate-400 text-lg font-medium mr-16">I am able to handle multiple tasks on a daily basis.
                    I am always energetic and eager to learn new skills.
                    I delivered all projects in a timely fashion.
                    I am always highly enthused about my work and tasks ahead.
                </p>
                
            </div>
            <div className="w-full h-full  grow ">
                <img  src="/jitesh.jpg" />
                </div>
           
        </div>
    );
} 

export default HomePage;