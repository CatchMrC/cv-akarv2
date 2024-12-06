import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe2,
  Code,
  Dumbbell,
  BookOpen,
} from "lucide-react";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import ExpandableText from "./components/ExpandableText";
import ScrollToTop from "./components/ScrollToTop";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  const sections = [
    "About",
    "Hobbies",
    "Skills",
    "Completed Courses",
    "Experience",
    "Education",
    "Contact",
  ];
  const aboutText =
    "Technology has always fascinated me - it inspires me to explore, innovate, and continually improve. With nearly four years of IT experience at a major enterprise, Novartis Pharma AG, and as I approach the completion of my apprenticeship as an IT Specialist in Business Informatics, I have gained extensive knowledge, particularly in the development of web applications. I am driven by the challenge of optimizing processes, turning creative ideas into reality, and working efficiently and solution-oriented. \n\n My approach is characterized by openness, honesty, and discipline. I enjoy experimenting and expanding my knowledge to tackle challenges with fresh perspectives. Beyond technical expertise, I value teamwork and dedication to achieve meaningful results. \n\n Outside of IT, I am equally ambitious. Regular strength training at the gym provides the perfect balance for my mind and body. Born and raised in Basel, Switzerland, I am eager to contribute to the digital world with energy, innovation, and a passion for progress.";

  return (
    // Added overflow-x-hidden to prevent horizontal scrolling
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen overflow-x-hidden pt-16 md:pt-20">
      <NavBar sections={sections} />
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <Section id="About" title="About Me">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <ExpandableText text={aboutText} maxLength={200} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-4 rounded-lg">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+41 78 752 31 58</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-4 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="Hobbies" title="Hobbies">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Programming
                </h3>
                <p className="text-gray-600">
                  Passionate about coding in free time and working on personal
                  projects
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Fitness
                </h3>
                <p className="text-gray-600">
                  Maintaining a healthy lifestyle through regular exercise and
                  workouts
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Learning
                </h3>
                <p className="text-gray-600">
                  Continuously expanding knowledge and acquiring new skills
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="Skills" title="Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl text-gray-800 mb-6">
                Programming Languages
              </h3>
              <div className="space-y-4">
                {["HTML", "CSS", "JavaScript/TypeScript", "PHP", "Python"].map(
                  (skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl text-gray-800 mb-6">
                Frameworks & Tools
              </h3>
              <div className="space-y-4">
                {["React", "Vue.js", "Node.js", "Git", "Bootstrap"].map(
                  (skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Section>

        <Section id="Completed Courses" title="Completed Courses">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl text-gray-800 mb-6">
                Professional Development
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-medium text-lg text-gray-800">
                    10-Finger Typing Mastery
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Advanced typing certification with 60+ WPM
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    Completed: March 2020
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-medium text-lg text-gray-800">
                    Startup Fundamentals
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Comprehensive course on startup development and management
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    Completed: December 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl text-gray-800 mb-6">
                Technical Certifications
              </h3>

              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-medium text-lg text-gray-800">
                  ITIL Project Management
                </h4>
                <p className="text-gray-600 mt-1">
                  Aligns IT services with business needs through best practices
                  and continuous improvement
                </p>
                <p className="text-sm text-red-600 mt-1">
                  Not Completed: October 2023
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="Experience" title="Work Experience">
          <div className="space-y-8">
            {[
              {
                title: "IT Specialist at Novartis Pharma AG (LSI)",
                period: "02.2024 - 07.2025",
                achievements: [
                  "Experiment with newest Technologies",
                  "Gettin VR Session leader",
                  "Programmed a chatbot with an local llm to use it as a personal tech assistant",
                ],
              },
              {
                title: "IT Spceialist at Novartis Pharma AG (IME)",
                period: "05.2023 - 02.2024",
                achievements: [
                  "Published an internal Event location booking system as a Website for IME",
                  "Enthanced programming skills, JS, PHP,HTML, CSS, Bootstrap",
                  "Get known with lot of proccesses of all being",
                ],
              },
              {
                title:
                  "IT Specialist at Novartis Pharma AG (SupportHub, IT Rep, Hardware Team)",
                period: "01.2023 - 05.2023",
                achievements: [
                  "Get know with customer contact",
                  "Session leader for LCM",
                  "Seein behind the scenes, how the hardware is stored, process of purchase new hardware, how old hardware gettin sold ...",
                ],
              },
              {
                title: "IT Specialist at Novartis Pharma AG (Lab IT)",
                period: "05.2022 - 01.2023",
                achievements: [
                  "Gettin know to the Company",
                  "Learned Jira, Booking system, SNOW, GLPI ",
                  "Technical practices, gettin the fundament",
                ],
              },
              {
                title: "IT Specialist at Aprentas",
                period: "08.2021 - 05.2022",
                achievements: [
                  "Gettin schooled, to be a IT Specialist",
                  "Lot a Courses",
                  "5 of day school",
                ],
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-semibold text-xl text-gray-800">
                  {job.title}
                </h3>
                <p className="text-blue-600 font-medium mt-2">{job.period}</p>
                <ul className="mt-4 space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mt-1.5"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="Education" title="Education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                degree: "centre for bridging offers (ZBA)",
                school: "Niederholzstrasse 95, 4125 Riehen",
                period: "2020/08 - 2021/07",
                details: "ZBA Niederholz - Riehen",
              },
              {
                degree: "Secondary school niveau E",
                school: "Sek - St. Alban",
                period: "2018/01 - 2020/07",
                details: "Minor in Mathematics",
              },
              {
                degree: "Secondary school niveau A",
                school: "Sek - St. Alban",
                period: "2017/10 - 2018/01",
                details: "St. Alban - Basel",
              },
              {
                degree: "Secondary school niveau A",
                school: "SRheinparkstrasse 18, 4127 Birsfelden",
                period: "2017/08 - 2017/10",
                details: "Rheinpark - Birsfelden",
              },
              {
                degree: "Primary School",
                school: "Florastrasse 11, 4127 Birsfelden",
                period: "2011/08 - 2017/07",
                details: "Scheuerrain - Birsfelden, ",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-semibold text-xl text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 font-medium mt-2">{edu.school}</p>
                <p className="text-gray-500 mt-1">{edu.period}</p>
                <p className="text-gray-600 mt-4">{edu.details}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="Contact" title="Contact Me">
          <div className="space-y-8">
            <ContactForm />
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl text-gray-800 mb-6">
                Get In Touch
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a
                  href="https://github.com/CatchMrC?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/can-akar-a2428b337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0077b5] text-white rounded-xl hover:bg-[#006396] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:akarcan.business@gmail.com"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://ca-codes.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  <Globe2 className="w-5 h-5" />
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
