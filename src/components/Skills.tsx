import SkillItem from "./SkillItem";
import { skillGroups as SkillsData } from "../data/skills";
import { SkillGroup } from "../data/skills";
import React, { useState } from "react";
import Lottie from 'lottie-react'
import frontEndDevAnimation from '../assets/lotties/front-end-lottie-purple.json';
// import rocketAnimation from '../assets/lotties/rocket-purple.json';
import SearchInput from "./SearchInput";
import NoData from "./NoData";
import Performance from "./Performance";
const Skills = () => {
  const [skillGroups, setSkillGroups] = useState<Array<SkillGroup>>(SkillsData)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value
    if (searchText === "") {
      setSkillGroups(SkillsData)
      return
    }

    const filtered = SkillsData.map(skillGroup => ({
      ...skillGroup,
      skills: skillGroup.skills.filter(skill =>
        skill.name.toLowerCase().includes(searchText.toLowerCase())
      )
    })).filter(skillGroup => skillGroup.skills.length > 0);

    setSkillGroups(filtered);
  }

  return (
    <section id="skills" className="bg-indigo-600 dark:bg-slate-800 pb-20 flex flex-col">
      <div className="relative top-56 pb-10 sssm:mx-10 lg:mx-20 gap-10 flex flex-col">
        <h1 className="lg:text-9xl md:text-9xl text-5xl font-bold lg:text-start md:text-start text-center dark:opacity-[10%] text-white opacity-[25%]">Skills</h1>
    
        <Performance />
        <div className="card z-40">
          <div className="text-center">
            <div className="relative flex flex-col justify-center items-center mb-4 ">
              <h2 className="text-2xl font-bold dark:text-white text-gray-700 mb-4">Dev skills</h2>
              <SearchInput onChange={handleSearch} />

            </div>
            {/* lg:overflow-y-hidden overflow-y-auto h-full lg:max-h-full max-h-dvh */}
            <div className="flex sssm:flex-col ssm:flex-col lg:flex-row w-full sssm:space-x-0 ssm:space-x-0 lg:space-x-10 sssm:space-y-10 ssm:space-y-10 lg:space-y-0 justify-center z-40
            ">
              {skillGroups && skillGroups.length > 0 ? skillGroups.map((group, index) => (
                <React.Fragment key={index}>
                  <table className="h-full sssm:w-full ssm:w-full lg:w-1/4">
                    <tbody>
                      <tr>
                        <td>
                          <h3 className="text-1xl font-semibold sssm:text-center ssm:text-center lg:text-start text-gray-600 dark:text-slate-300">{group.groupName}</h3>
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
              )) :
                <NoData
                  message="Sorry, but I don't have that skill yet" />}
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
      </div>

    </section>
  );
};

export default Skills;
