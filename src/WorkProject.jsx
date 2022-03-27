import react from "react";

function WorkProject() {
    return (
        <div className="flex flex-col p-16 overflow-hidden">
            <h1 className="text-5xl font-bold flex flex-col mb-16 ">Projects</h1>
            <div className="flex flex-col bg-black">
                <div className=" p-3">
                    <img className=" w-full w-1/2 mr-5 object-cover border border-white" src="src/project1.png" />
                    <div className="flex flex-col">
                <img className="  mb-5 object-cover border border-white" src="src/project2.png"/>
                        <img className="  border border-white" src="src/project3.png" />
                        </div>
                </div>
                <div className="md:flex p-2">
                     <img className="w-1/3 mb-3 mr-3 object-cover border border-white" src="src/project4.png"/>
                    <img className=" w-1/3 mb-3 mr-3  object-cover border border-white" src="src/project5.png" />
                    <img className="w-96  mb-3 mr-2 object-cover border border-white" src="src/project6.png" />
                    </div>
            </div>
        </div>
    );
}

export default WorkProject;