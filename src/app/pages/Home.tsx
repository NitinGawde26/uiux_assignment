import { Github, Linkedin, Mail, Phone, Code2, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import NgmlLogo from '../../imports/NgmlLogo-1/NgmlLogo-14-142';
import utsImage from '../../imports/LandingScreen3/d513129792cc35c11ddaf7dc23b5a53595e9787c.png';

export function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Docker PR Deployment Validator",
      description: "Built an Agentic AI system using LangGraph to detect and fix CI/CD (Docker) failures in GitHub PRs with multi-agent pipeline for automated failure analysis.",
      image: "https://images.unsplash.com/photo-1717501218456-c4789b65fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["LangGraph", "Express.js", "GitHub API", "Gemini 2.5"],
      link: "/projects/docker-validator"
    },
    {
      title: "AI-Driven Live Call Insights",
      description: "Chrome extension integrating with Google Meet for real-time transcription, sentiment analysis, and AI-powered insights using fine-tuned LLaMA 3.1-8B model.",
      image: "https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["React", "FastAPI", "AWS", "Deepgram"],
      link: "/projects/call-insights"
    },
    {
      title: "UTS App Redesign",
      description: "Complete UI/UX redesign of the University Time Table System app with improved navigation, modern interface, and enhanced user experience using Figma.",
      image: utsImage,
      tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
      link: "/projects/uts-redesign"
    }
  ];

  const skills = {
    "AI/ML": ["LangChain", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    "Languages": ["Python", "JavaScript", "TypeScript", "SQL"],
    "Web Development": ["Node.js", "FastAPI", "React", "Express.js", "Keycloak"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "Ansible", "AWS", "Debezium", "Dapr"]
  };

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#2d5a3d]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10">
                <NgmlLogo />
              </div>
              <span className="text-xl font-bold text-[#2d5a3d]">Nitin Gawde</span>
            </Link>
            <nav className="hidden md:flex gap-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-[#2d5a3d] transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
            <a
              href="mailto:nitingawde2605@gmail.com"
              className="px-4 py-2 bg-[#2d5a3d] text-white rounded-lg hover:bg-[#234a31] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-[#e8f4ea] to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#2d5a3d]/10 text-[#2d5a3d] rounded-full mb-6 border border-[#2d5a3d]/20">
                <span className="text-sm font-semibold">👋 Welcome to my portfolio</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Nitin Gawde
              </h1>
              <h2 className="text-2xl md:text-3xl text-[#2d5a3d] font-semibold mb-6">
                ML Engineer & AI Developer
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Computer Science student at SPIT with a passion for building intelligent systems.
                Specializing in LangChain, AI agents, and full-stack ML applications with hands-on
                experience in production-grade deployments.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-[#2d5a3d] text-white rounded-lg hover:bg-[#234a31] transition-all shadow-lg hover:shadow-xl font-semibold"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-[#2d5a3d] text-[#2d5a3d] rounded-lg hover:bg-[#2d5a3d] hover:text-white transition-all font-semibold"
                >
                  Contact Me
                </button>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/nitingawde" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2d5a3d] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/nitingawde" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2d5a3d] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:nitingawde2605@gmail.com" className="text-gray-600 hover:text-[#2d5a3d] transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#2d5a3d]/20 rounded-full blur-3xl"></div>
                <img
                  src="/src/imports/image.png"
                  alt="Nitin Gawde"
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#e8f4ea] rounded-2xl p-8 md:p-12 border border-[#2d5a3d]/20">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I'm currently pursuing my Bachelor's in Computer Science Engineering with a Minor in UI/UX
                  at Sardar Patel Institute of Technology (SPIT), Mumbai. With a GPA of 7.91, I'm passionate
                  about leveraging AI and machine learning to solve real-world problems.
                </p>
                <p className="text-lg">
                  My expertise lies in building intelligent systems using cutting-edge technologies like
                  LangChain, LangGraph, and various AI frameworks. I've developed production-ready applications
                  ranging from AI-powered DevOps tools to real-time call analytics systems.
                </p>
                <p className="text-lg">
                  Beyond coding, I served as Head of Logistics for the Sports Committee, managing large-scale
                  events with 1,200+ participants, demonstrating my leadership and organizational skills.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-[#2d5a3d]">7.91</div>
                  <div className="text-sm text-gray-600">GPA</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-[#2d5a3d]">3+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-[#2d5a3d]">10+</div>
                  <div className="text-sm text-gray-600">Tech Stack</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-[#2d5a3d]">2027</div>
                  <div className="text-sm text-gray-600">Graduation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-white to-[#e8f4ea]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Showcasing my work in AI, ML, and full-stack development with real-world impact
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Link
                key={idx}
                to={project.link}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#2d5a3d]/10 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d5a3d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white flex items-center gap-2 font-semibold">
                      View Details →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#e8f4ea] text-[#2d5a3d] rounded-full text-xs font-semibold border border-[#2d5a3d]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Skills & Technologies</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern AI and ML applications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-[#e8f4ea] to-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-[#2d5a3d] mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#2d5a3d] rounded-full"></div>
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2d5a3d]/60 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#e8f4ea]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Certifications & Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <BookOpen className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">JPMorgan Chase & Co. Quantitative Research</h3>
                  <p className="text-gray-600 text-sm">Virtual Experience Program on Forage</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <Code2 className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Sports Committee – Head of Logistics</h3>
                  <p className="text-gray-600 text-sm mb-2">Sep 2023 – Jun 2025</p>
                  <p className="text-gray-700 text-sm">
                    Led end-to-end logistics for a national Half Marathon (1,200+ participants) and "Spoorthi"
                    sports fest (2,000+ athletes from 30+ colleges).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Let's Connect</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#e8f4ea] to-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Mail className="w-6 h-6 text-[#2d5a3d]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <a href="mailto:nitingawde2605@gmail.com" className="text-[#2d5a3d] font-semibold hover:underline">
                      nitingawde2605@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#e8f4ea] to-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Phone className="w-6 h-6 text-[#2d5a3d]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Phone</div>
                    <a href="tel:+918850731359" className="text-[#2d5a3d] font-semibold hover:underline">
                      +91 8850731359
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#e8f4ea] to-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Github className="w-6 h-6 text-[#2d5a3d]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">GitHub</div>
                    <a href="https://github.com/nitingawde" target="_blank" rel="noopener noreferrer" className="text-[#2d5a3d] font-semibold hover:underline">
                      github.com/nitingawde
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#e8f4ea] to-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Linkedin className="w-6 h-6 text-[#2d5a3d]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">LinkedIn</div>
                    <a href="https://linkedin.com/in/nitingawde" target="_blank" rel="noopener noreferrer" className="text-[#2d5a3d] font-semibold hover:underline">
                      linkedin.com/in/nitingawde
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2d5a3d] to-[#234a31] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span>Location</span>
                  <span className="font-semibold">Mumbai, India</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span>Education</span>
                  <span className="font-semibold">SPIT</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span>Graduation</span>
                  <span className="font-semibold">2027</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Status</span>
                  <span className="font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5a3d] text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8">
                <NgmlLogo />
              </div>
              <span className="font-bold">Nitin Gawde</span>
            </div>
            <p className="text-sm text-white/80">
              © 2026 Nitin Gawde. Building intelligent systems, one project at a time.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/nitingawde" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8f4ea] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/nitingawde" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8f4ea] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:nitingawde2605@gmail.com" className="hover:text-[#e8f4ea] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
