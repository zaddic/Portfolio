import React from "react";

function Summary() {
  return (
    <div className="flex justify-center w-full h-auto text-white">
      <div className=" flex-initial justify-center items-center w-3/4 shadow-sm p-12 text-center break-inside-avoid-column border-2 border-solid border-mblue shadow-mblue">
        <h1
          className=" font-bold text-6xl pb-6 "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          About <span className="text-mblue">Me</span>
        </h1>
        <p
          className="  font-semibolds text-xl mt-0"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Highly motivated{" "}
          <span className="text-mblue">MERN stack developer</span> with a
          passion for building dynamic and engaging web applications.
        </p>{" "}
        <br />
        <p
          className=" text-center text-sm  "
          data-aos="fade-left"
          data-aos-duration="2000">
          I am an experienced full-stack web developer proficient in MongoDB,
          Express.js, React.js, and Node.js. My expertise lies in developing web
          applications that encompass the entire stack. I am dedicated to
          continuously updating my knowledge and skills to keep up with the
          latest technologies and best practices in web development. With a
          strong problem-solving aptitude and collaborative mindset, I excel in
          working effectively within cross-functional teams. My focus is on
          delivering high-quality code that fulfills the requirements of
          end-users. I am enthusiastic about leveraging my skills and experience
          in a challenging software development role, contributing to the
          success of projects.
        </p>
      </div>
    </div>
  );
}

export default Summary;
