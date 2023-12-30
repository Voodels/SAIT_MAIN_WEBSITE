import React, { forwardRef } from "react";
import Board from "./Board";
import mentors from "../Data/MentorTeacher";
import "../Style/MentorPage.css"


const MentorPage = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex flex-col justify-center items-center mt-16">

            <div className="text-[50px]  font-bold  text-center gradient-text event_section_heading ">

                <div className="text-5xl font-bold gradient-text mb-8
            content

             flex justify-center align-center
                top-3 p-3

             text-center
          ">
                    <h2
                        className="txt
               text-center
              "
                    >
                        Mentors
                    </h2>
                    <h2
                        className="txt
                text-center
              "
                    >
                        Mentors
                    </h2>
                </div>

            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {mentors && mentors.map((mentor) => {
                    return <Board mentor={mentor} key={mentor.name} />;
                })}
            </div>
        </div>
    );
});

export default MentorPage;