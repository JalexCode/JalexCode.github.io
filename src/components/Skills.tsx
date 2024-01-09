import SkillItem from "./SkillItem";
import skillGroups from "../data/skills";
import React from "react";
import Lottie from 'lottie-react'
import frontEndDevAnimation from '../assets/lotties/front-end-lottie-purple.json';
// import rocketAnimation from '../assets/lotties/rocket-purple.json';

const Skills = () => {
  return (
    <section id="skills" className="bg-indigo-600 pt-40">
      <div className="card py-10 lg:mx-20 ssm:mx-10">
          <div className="text-center">
            <div >
              <h2 className="sections-title">Skills</h2>
            </div>
            <div className="flex lg:flex-row ssm:flex-col w-full lg:space-x-10 ssm:space-x-0 lg:space-y-0 ssm:space-y-10 justify-center z-40">
              {skillGroups.map((group, index) => (
                <React.Fragment key={index}>
                  <table className="h-fit lg:w-1/4 ssm:w-full">
                    <tbody>
                      <tr>
                        <td>
                          <h3 className="text-1xl font-semibold lg:text-start ssm:text-center text-gray-600">{group.groupName}</h3>
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
              className='opacity-40 mb-5 mr-5 z-0 ssm:hidden lg:block'
              style={{ width: '200px', bottom: 0, right: 0, position: "absolute" }}
            />
          </div>

        </div>

    </section>
  );
};

export default Skills;
