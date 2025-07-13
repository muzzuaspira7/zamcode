import { FaCode, FaCloud, FaHtml5, FaReact } from "react-icons/fa";
import { SiDart, SiFlutter, SiFirebase } from "react-icons/si";
import { MdWeb } from "react-icons/md";

function Skills() {
  const skills = [
    {
      head: "Language",
      detail: "Dart",
      icon: <SiDart className="text-2xl text-[#0175C2]" />,
    },
    {
      head: "Web Development",
      detail: "HTML 5, CSS 3, JavaScript",
      icon: <FaHtml5 className="text-2xl text-[#e44d26]" />,
    },
    {
      head: "Framework",
      detail: "Flutter, React Native",
      icon: <SiFlutter className="text-2xl text-[#02569B]" />,
    },
    {
      head: "Cloud Computing",
      detail: "Firebase",
      icon: <SiFirebase className="text-2xl text-[#FFA611]" />,
    },
  ];

  return (
    <div className="h-auto w-full bg-[#fffaf6] flex flex-col px-5 md:px-20 py-16 md:py-28 overflow-hidden">
      {/* Heading */}
      <h3
        className="text-4xl md:text-5xl font-light mb-12 text-left"
        style={{ fontFamily: "Cinzel" }}
      >
        My Skills
      </h3>

      {/* Skill Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              flex items-start gap-4 bg-white border border-[#E6DDD3] 
              rounded-xl shadow-md p-5 hover:shadow-xl 
              hover:scale-[1.02] hover:border-[#7A4E2D] transition-all duration-300
            "
          >
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">{skill.icon}</div>

            {/* Text */}
            <div>
              <h4
                className="text-[#7A4E2D] text-xl md:text-2xl mb-1"
                style={{ fontFamily: "Cinzel" }}
              >
                {skill.head}
              </h4>
              <p
                className="text-base md:text-lg text-gray-800"
                style={{ fontFamily: "Montserrat" }}
              >
                {skill.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
