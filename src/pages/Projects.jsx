import { ExternalLink, Github, Calendar, Star } from "lucide-react";
import Zoomix from "../Assets/jntalks.png";
import SyncSpace from "../Assets/saathi.png";
import Codecrafters from "../Assets/codecrafters.png";
import Suppliez from "../Assets/suppliez.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Zoomix",
      description:
        "Zoomix is a robust Zoom clone developed using getStream.io and Next.js. This platform offers seamless video conferencing capabilities, real-time chat, and collaborative features, providing users with an efficient and reliable virtual meeting experience.",
      image: Zoomix,
      technologies: ["Next.js", "Typescript", "JWT", "clerk"],
      liveUrl: "https://jntalks.vercel.app/",
      githubUrl: "https://github.com/Brainskull24/jntalks",
      date: "2024",
      featured: true,
    },
    {
      id: 2,
      title: "SyncSpace",
      description:
        "This platform empowers professors & students to collaborate effectively, providing project management features like team management and collaborative development. It ensures a secure and user-friendly environment for successfull implementation.",
      image: SyncSpace,
      technologies: [
        "React",
        "Socket.io",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Node.js",
      ],
      liveUrl: "https://saathii.vercel.app",
      githubUrl: "https://github.com/Saathi-com/Saathi.com",
      date: "2024",
      featured: true,
    },
    {
      id: 3,
      title: "Codecrafters",
      description:
        "Online code and markdown editor build with react.js and monaco editor. Online Editor which supports html, css, and js code with instant view of website. You can also save your projects and participate in different daily challenges and quizzes.",
      image: Codecrafters,
      technologies: ["React", "Redux", "Node.js", "codemirror"],
      liveUrl: "https://codecrafterss.netlify.app/",
      githubUrl: "https://github.com/Brainskull24/CODECRAFTERS",
      date: "2023",
      featured: false,
    },
    {
      id: 4,
      title: "Suppliez",
      description:
        "Suppliez is a student-focused grocery store platform built with the MERN stack. It features an intuitive user interface and an efficient admin dashboard for seamless order management. Designed to cater to university communities, Suppliez ensures a smooth and convenient shopping experience for students.",
      image: Suppliez,
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/Brainskull24/Suppliez",
      date: "2023",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
            <Star className="mr-2" size={24} />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50 group"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-cyan-400 mb-8">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/30 group"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-400 mb-6">
            I'm always open to discussing new opportunities and exciting
            projects.
          </p>
          <a
            href="mailto:garg.nimit36@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
