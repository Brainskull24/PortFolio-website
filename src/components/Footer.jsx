import { Heart, Github, Linkedin, Instagram, Mail, Code } from "lucide-react";

const Footer = () => {
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
      href: "https://www.instagram.com/gargnimit24",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Mail,
      href: "mailto:nimit@example.com",
      label: "Email",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                <Code className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Nimit Garg
              </h3>
            </div>
            <p className="text-gray-400">
              Full Stack Developer passionate about creating innovative
              solutions and learning new technologies.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-gray-400 hover:text-cyan-400 transition-colors"
              >
                About
              </a>
              <a
                href="/projects"
                className="block text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="/resume"
                className="block text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-700/50 backdrop-blur-sm rounded-xl ${color} transition-all duration-300 transform hover:scale-110 border border-gray-600/50`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="text-red-500 mx-2" size={16} /> by Nimit
            Garg
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
