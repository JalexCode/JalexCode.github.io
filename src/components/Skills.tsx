import SkillItem from "./SkillItem";
import skillGroups from "../data/skills";
import React from "react";
import Lottie from 'lottie-react'
import frontEndDevAnimation from '../assets/lotties/front-end-lottie-purple.json';
// import rocketAnimation from '../assets/lotties/rocket-purple.json';

const Skills = () => {
  return (
    <section id="skills" className="bg-indigo-600 pb-20">
      <div className="card relative top-56 ssm:pt-10 pb-10 sssm:mx-10 lg:mx-20 z-40">
          <div className="text-center">
            <div >
              <h2 className="sections-title">Skills</h2>
            </div>
            <div className="flex sssm:flex-col ssm:flex-col lg:flex-row w-full sssm:space-x-0 ssm:space-x-0 lg:space-x-10 sssm:space-y-10 ssm:space-y-10 lg:space-y-0 justify-center z-40">
              {skillGroups.map((group, index) => (
                <React.Fragment key={index}>
                  <table className="h-fit sssm:w-full ssm:w-full lg:w-1/4">
                    <tbody>
                      <tr>
                        <td>
                          <h3 className="text-1xl font-semibold sssm:text-center ssm:text-center lg:text-start text-gray-600">{group.groupName}</h3>
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
              className='opacity-40 mb-5 mr-5 z-0 sssm:hidden ssm:hidden lg:block'
              style={{ width: '200px', bottom: 0, right: 0, position: "absolute" }}
            />
          </div>

        </div>

    </section>
  );
};

export default Skills;
