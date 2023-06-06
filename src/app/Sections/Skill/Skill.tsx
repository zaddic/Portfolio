import React from "react";
import {skills} from "../data/skills.jsx";

type Skill = {
  title: string;
  icon: JSX.Element;
};

type SkillType = {
  type: string;
  color: string;
  list: Skill[];
};

type CardProps = {
  type: string;
  dataAos: string,
  dataDelayAos: string
};

export function Card({ type, dataAos, dataDelayAos }: CardProps) {
  const filteredSkills = skills.find((skill) => skill.type === type);

  if (!filteredSkills) {
    return null;
  }

  return (
    <div className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 rounded-xl bg-gradient-to-r from-[#00cea8] to-[#bf61ff] p-[2px] shadow-xl shadow-[#00cea8]/20" data-aos={dataAos} data-delay-aos={dataDelayAos} >
      <div className="flex flex-col h-full bg-[#151030] text-white rounded-lg flex-wrap border-2 p-2" >
        <h2 className="text-center text-sm md:text-xl py-1 sm:py-2">{type}</h2>
        <div className="flex justify-start flex-row flex-wrap ">
          {filteredSkills.list.map((skill, index) => (
            <div key={index} className="flex justify-start items-center w-1/2 sm:w-1/2 p-1   ">
              <span className="pr-1 text-xs sm:text-2xl">{skill.icon}</span>
              <span className="text-xs sm:text-base">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default Card;


// function Skill() {
//   return (
//     <div className="flex flex-col w-full h-auto p-5 space-x-4 shadow-md text-white">
//       <div className="flex justify-evenly">
//         <div>
//           <h1 className=" h-10 font-bold">For Any Type of Query & Discussion</h1>
//           <p className="text-white/50">
//             For any Query or Discussion Feel Free to Contact me at my Given
//             Information.
//           </p>
//           <p>
//             <img src="" alt="" /> 03070048591
//           </p>
//         </div>
//         <div>
//           <h1 className=" h-10 font-bold">
//             Be Formless & Shapless
//            Be Like Water</h1>
//           <p className="text-white/50">
//             Flexibility of Working in Different 
//             Enjoinments on Different
//             Projects.
//           </p>
//           <p>
//             <img src="" alt="" /> 03070048591
//           </p>
//         </div>
//       </div>
//       <div className="flex w-full h-auto p-5 space-x-4 shadow-md">
//         <div className=" flex-initial w-1/3 h-auto bg-mblue shadow-md">
//           <h1>Soft Skills</h1>
//         </div>
//         <div className=" flex-initial flex-wrap-reverse w-1/3 h-auto bg-mblue ">
//           <h1>Frontend</h1>
//         </div>
//         <div className=" flex-initial w-1/3 h-auto bg-mblue">
//         <h1>Backend</h1>
//       </div>
//       </div>
     
//     </div>
//   );
// }

// export default Skill;
