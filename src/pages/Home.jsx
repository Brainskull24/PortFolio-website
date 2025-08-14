import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
  Code,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";

const Home = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Brainskull24",
      label: "GitHub",
      color: "hover:bg-gray-700",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nimitgarg24/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nimitgarg24",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Mail,
      href: "mailto:garg.nimit36@gmail.com",
      label: "Email",
      color: "hover:bg-green-600",
    },
  ];

  const techIcons = [
    { name: "C++", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg mb-4">
                <Sparkles className="text-cyan-400" size={24} />
                <span className="text-gray-300">Hello, I'm</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Nimit Garg
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                Full Stack Developer &{" "}
                <span className="text-cyan-400 font-medium">AI Enthusiast</span>
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                I craft digital experiences through code, specializing in
                full-stack development and working with AI in day to day life.
                Graduated in BE in Computer Science with IoT from Chandigarh
                University.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-gray-700/50`}
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Code className="mr-2" size={20} />
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/30 hover:border-cyan-400 rounded-xl transition-all duration-300 hover:bg-cyan-400/10 backdrop-blur-sm"
              >
                Learn More About Me
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 shadow-xl backdrop-blur-md relative w-full max-w-sm">
              {/* Avatar */}
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl mb-3">👨‍💻</div>
                <div className="text-cyan-400 font-mono text-sm mb-2">
                  {`<FullStackDev />`}
                </div>
                <div className="text-gray-300 text-sm">
                  Graduate @ Chandigarh University 25'
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-600 my-6" />

              {/* Tech Icons */}
              <div className="grid grid-cols-3 gap-4 place-items-center">
                {techIcons.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="p-3 bg-gray-900 rounded-xl border border-gray-700 hover:bg-cyan-900/30 transition-all duration-300 group"
                    title={name}
                  >
                    <Icon
                      size={28}
                      className="text-cyan-300 group-hover:scale-110 transition"
                    />
                  </div>
                ))}
              </div>

              {/* Glow effect */}
              <div className="absolute -z-10 -top-10 -left-10 w-60 h-60 bg-cyan-500/10 blur-3xl rounded-full" />
              <div className="absolute -z-10 bottom-0 right-0 w-40 h-40 bg-blue-500/10 blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
