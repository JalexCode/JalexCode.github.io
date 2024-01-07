import SkillItem from "./SkillItem";
import skillGroups from "../data/skills";
import React from "react";
import Lottie from 'lottie-react'
import frontEndDevAnimation from '../assets/lotties/front-end-lottie-purple.json';
// import rocketAnimation from '../assets/lotties/rocket-purple.json';

const Skills = () => {
  return (
    <section id="skills" className="-mt-60 mb-28 pt-28">
      <div className="card my-4 mx-20">
        <div className="text-center">
          <div >
            <h2 className="sections-title">Skills</h2>
          </div>

          <div className="flex w-full space-x-10 justify-center">

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
          <Lottie
            loop={true}
            autoplay={true}
            animationData={frontEndDevAnimation}
            className='opacity-40 mb-5 mr-5'
            style={{ width: '200px', bottom:0, right: 0, position:"absolute"}}
        />
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
