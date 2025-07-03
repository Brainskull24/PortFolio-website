import {
  Download,
  MapPin,
  Phone,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Star,
} from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Backend Developer Intern",
      company: "Belzabar Software Design",
      location: "Remote",
      duration: "September 2024 - Present",
      description: [
        "Developed and maintained modular microservices in Java Spring Boot including Thumbnail, SMTP and Scheduler services using Quartz, improving monitoring alert management by 30% and enhancing system automation.",
        "Worked on Document Management System (DMS) integrated with Elasticsearch, Amazon S3, and Spring Boot, enabling scalable file storage, fast search, and efficient document retrieval across modules by 25%",
        "Built core backend services like Announcement Center to streamline team communication and track engagement stats by 20%, and optimized the User CRUD service with helper utilities and legacy integrations.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Wictronix",
      location: "Chandigarh, India",
      duration: "August 2023 - October 2023",
      description: [
        "Spearheaded the development of a scalable e-Commerce platform using the MERN stack, allowing more than 100 daily transactions. Integrated JWT-based authentication, boosting user security and trust.",
        "Optimized and integrated front-end and back-end components using React, Node.js and Express.js, resulting in a 30% boost in platform performance and a smoother user experience at all touchpoints.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      specialization: "Internet of Things (IoT)",
      institution: "Chandigarh University",
      location: "Chandigarh, India",
      duration: "2021 - 2025",
      gpa: "8.18/10",
    },
    {
      degree: "Higher Secondary Education",
      institution: "St. Anselms sr. sec. school",
      location: "Alwar, India",
      duration: "2019 - 2021",
      gpa: "91%",
    },
  ];

  const achievements = [
    "Qualified in NASA space Hackathon 2023 at zonal level.",
    "Qualified in Smart India Hackathon 2023 at College Level.",
    "Solved 350+ DSA questions on Leetcode and GeeksforGeeks platforms.",
  ];

  const skills = {
    Frontend: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Redux",
      "TypeScript",
      "shadcn/ui",
    ],
    Backend: ["Node.js", "Express", "SpringBoot", "REST APIs"],
    Database: ["MongoDB", "MySQL"],
    "Tools & Others": ["Git", "Docker", "Postman", "VS Code"],
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Download my resume or view my experience and qualifications below
          </p>
          <a
            href="/Nimit_Resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700/50">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-3">
                <MapPin className="text-white" size={20} />
              </div>
              <span className="text-gray-300">Chandigarh, India</span>
            </div>
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mr-3">
                <Phone className="text-white" size={20} />
              </div>
              <span className="text-gray-300">+91 9828339100</span>
            </div>
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3">
                <Mail className="text-white" size={20} />
              </div>
              <span className="text-gray-300">garg.nimit36@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center text-cyan-400">
            <Briefcase className="mr-3" size={32} />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 relative"
              >
                {exp.current && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-cyan-400 font-medium">
                    {exp.duration}
                  </span>
                </div>
                <div className="flex items-center text-gray-400 mb-3">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center text-cyan-400">
            <GraduationCap className="mr-3" size={32} />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 relative"
              >
                {edu.current && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-cyan-400 font-medium">
                    {edu.duration}
                  </span>
                </div>
                {edu.specialization && (
                  <p className="text-gray-300 mb-2">
                    Specialization: {edu.specialization}
                  </p>
                )}
                <div className="flex items-center text-gray-400 mb-2">
                  <span className="font-medium">{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.location}</span>
                </div>
                <p className="text-gray-300">GPA: {edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center text-cyan-400">
            <Star className="mr-3" size={32} />
            Technical Skills
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-bold text-white mb-3 text-lg">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center text-cyan-400">
            <Award className="mr-3" size={32} />
            Achievements
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
