import { Code, Database, Globe } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: Globe,
      level: 90,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend Development",
      icon: Code,
      level: 95,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Databases",
      icon: Database,
      level: 85,
      color: "from-green-500 to-teal-500",
    },
  ];

  const technologies = [
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400 border-yellow-500/50",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-400 border-blue-500/50",
    },
    {
      name: "React",
      icon: SiReact,
      color: "text-cyan-400 border-cyan-500/50",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white border-gray-400/40",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-300 border-cyan-400/40",
    },
    // {
    //   name: "shadcn/ui",
    //   icon: SiRadixui,
    //   color: "text-white border-gray-500/50",
    // },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "text-green-400 border-green-500/50",
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "text-gray-400 border-gray-500/50",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-400 border-green-500/50",
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "text-blue-400 border-blue-500/50",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "text-red-400 border-red-500/50",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know more about my journey, skills, and passion for
            technology
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">My Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm Nimit Garg, a passionate software developer currently
                pursuing my Bachelor's in Computer Science Engineering with a
                specialization in Internet of Things at Chandigarh University.
              </p>
              <p>
                My journey in tech started with curiosity about how websites
                work, which led me to dive deep into web development. Over time,
                I've expanded my expertise to include machine learning,
                Artificial Intelligence and many more.
              </p>
              <p>
                I believe in continuous learning and staying updated with the
                latest technologies. When I'm not coding, you can find me
                exploring new frameworks, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Skills & Expertise
            </h2>
            <div className="space-y-6">
              {skills.map(({ name, icon: Icon, level, color }) => (
                <div key={name}>
                  <div className="flex items-center mb-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${color} mr-3`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <span className="text-gray-300 font-medium flex-1">
                      {name}
                    </span>
                    <span className="text-sm text-gray-400 font-mono">
                      {level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className={`border-2 ${color} rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm group`}
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-lg border-2 ${color} flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} className={`${color} mx-auto`} />
                  </div>
                  <div className="font-medium text-sm text-gray-200">
                    {name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Activity - Kept as your previous static design */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">
            GitHub Activity
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="mb-6">
              <p className="text-gray-400 mb-2">
                My coding activity and contributions
              </p>
              <p className="text-sm text-gray-500">
                Follow me on{" "}
                <a
                  href="https://github.com/Brainskull24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  @Brainskull24
                </a>
              </p>
            </div>

            {/* Contribution Grid Placeholder */}
            <GitHubCalendar
              username="Brainskull24"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
            />

            {/* GitHub Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  150+
                </div>
                <div className="text-sm text-gray-400">Contributions</div>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">45+</div>
                <div className="text-sm text-gray-400">Repositories</div>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">10+</div>
                <div className="text-sm text-gray-400">Languages & Tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
