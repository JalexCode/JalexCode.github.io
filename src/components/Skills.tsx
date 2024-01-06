import SkillItem from "./SkillItem";
import skillGroups from "../data/skills";
import React from "react";
import Lottie from 'lottie-react'
import devAnimation from '../assets/lotties/front-end-lottie-blue.json';

const Skills = () => {
  return (
    <section className="-mt-60 mb-28">
      <div className="card">
        <div className="text-center">
          <div >
            <h2 className="sections-title">Skills</h2>
          </div>

          <div className="flex w-full space-x-10 justify-center mt-10">

            {skillGroups.map((group, index) => (
              <React.Fragment key={index}>
                <table className="h-fit w-1/4">
                  <tbody>
                    <tr>
                      <td>
                        <h3 className="text-1xl font-semibold text-start text-gray-600">{group.groupName}</h3>
                      </td>
                    </tr>
                    {group.skills.sort((a, b) => b.rating - a.rating).map(skill => (
                      <tr>
                        <td className="flex items-center mt-5">
                          <SkillItem image={skill.iconPath} text={skill.name} percent={skill.rating} bgColor={skill.color} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </React.Fragment>
            ))}
          </div>
          {/* <div className='absolute z-2'>
            <Lottie
              loop={true}
              autoplay={true}
              animationData={devAnimation}
              className='opacity-20'
              width={200}
              height={200}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
