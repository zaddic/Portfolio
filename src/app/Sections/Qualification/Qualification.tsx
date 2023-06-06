import React from "react";

function Education() {
  return (
    <div className="flex flex-col md:sm:flex-row justify-center items-center w-full h-auto text-white gap-7 p-6">
      <div className="flex items-center justify-center flex-col w-fit md:sm:w-1/2 h-fit p-9 border-2 border-solid border-mblue shadow-mblue shadow-sm">
        <h1
          className="text-mblue font-bold text-4xl pb-6 "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Qualification
        </h1>
        <div className="flex items-center">
          <ul className="flex flex-col text-lg font-medium" data-aos="fade-right"
          data-aos-duration="1000">
            <li>Matricultion - 2019-2020</li>
            <li>Intermediate - 2021-2022</li>
            <li>Bachelor's in Computer Sciences - Enrolled</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center flex-col w-fit md:sm:w-1/2  h-fit p-9 border-2 border-solid border-mblue shadow-mblue shadow-sm">
        <h1
          className="text-mblue font-bold text-4xl pb-6"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Courses
        </h1>
        <div className="flex items-center">
          <ul className="flex flex-col text-lg font-medium" data-aos="fade-left"
          data-aos-duration="1000">
            <li>Frontend Development - 2020</li>
            <li>MERN Stack Development - 2023</li>
            <li>Web 3.0 and Metaverse - 2023-Present</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
