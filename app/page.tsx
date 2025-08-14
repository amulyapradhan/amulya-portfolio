"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowUp,
  Sun,
  Moon,
  Phone,
  MapPin,
  Award,
  Download,
  Eye,
} from "lucide-react"
import { EnhancedResumePreview } from "@/components/enhanced-resume-preview"
import { ResumeSection } from "@/components/resume-section"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "Automated Warehouse Management System",
      description:
        "Developed comprehensive warehouse management software with multiple screens using Java Spring Boot, Oracle DB, and modern frontend technologies. Implemented automated storage, business validation, retrieval, and inquiry functionalities with microservices architecture.",
      image: "/modern-ecommerce-interface.png",
      tech: ["Java", "Spring Boot", "Oracle DB", "Microservices", "HTML", "CSS", "Bootstrap", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "We Move All - Multi-Service Booking Platform",
      description:
        "Built a comprehensive travel management web application with booking functionality for cab, bike, bus, and hotel services. Features real-time booking, history tracking, and user-friendly interfaces using Java Spring Boot microservices and React.js/Next.js frontend.",
      image: "/task-management-dashboard.png",
      tech: ["Java", "Spring Boot", "Microservices", "React.js", "Next.js", "MySQL", "REST APIs"],
      github: "#",
      live: "#",
    },
    {
      title: "Esports Fantasy Gaming Platform",
      description:
        "Developed and implemented a fantasy gaming app and website for BGMI/CODM contests. Users can bid on players with virtual currency, track leaderboards, manage wallets with Razorpay integration, and access profiles, referrals, and support features.",
      image: "/preview/project4.png",
      tech: ["Java", "Spring Boot", "React.js", "Next.js", "MySQL", "Razorpay", "REST APIs"],
      github: "#",
      live: "#",
    },
  ]

  const skills = [
    {
      category: "Core Java & Frameworks",
      items: ["Java", "Spring Boot", "Spring Framework", "REST APIs", "Microservices", "Hibernate/JPA"],
    },
    {
      category: "Frontend & Database",
      items: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Oracle DB", "MySQL"],
    },
    {
      category: "Development Tools",
      items: ["Eclipse", "STS", "VS Code", "IntelliJ IDEA", "Postman", "Git", "GitHub", "SVN"],
    },
    {
      category: "Devops",
      items: ["Docker","CI/CD Jenkins"]
    }, {
      category: "Messaging services",
      items: ["Redis","Kafka"]
    }
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-gradient-to-br from-slate-900 to-blue-900" : "bg-gradient-to-br from-slate-50 to-blue-50"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 ${isDarkMode ? "bg-slate-900/80 border-slate-700" : "bg-white/80 border-slate-200"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`font-bold text-xl ${isDarkMode ? "text-white" : "text-slate-800"}`}
            >
              Amulya Pradhan
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["about", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-colors capitalize font-medium ${isDarkMode ? "text-slate-300 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"}`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? "bg-slate-800 text-yellow-400 hover:bg-slate-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? "bg-slate-800 text-yellow-400" : "bg-slate-100 text-slate-600"}`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X size={24} className={isDarkMode ? "text-white" : "text-slate-800"} />
                ) : (
                  <Menu size={24} className={isDarkMode ? "text-white" : "text-slate-800"} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden border-t transition-colors ${isDarkMode ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`}
          >
            <div className="px-4 py-2 space-y-2">
              {["about", "projects", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 transition-colors capitalize ${isDarkMode ? "text-slate-300 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div style={{ opacity, scale }} className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-slate-800"}`}
            >
              Amulya Pradhan
              <span className="text-blue-600 block">Java Developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              Experienced Java Developer with 3+ years at Indo Sakura Software, specializing in Spring Boot,
              microservices, and full-stack development. Passionate about creating scalable, efficient, and maintainable
              software solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                View My Work
              </Button>
              <EnhancedResumePreview
                triggerButton={
                  <Button
                    variant="outline"
                    size="lg"
                    className={`px-8 py-3 ${isDarkMode ? "border-slate-600 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-50"}`}
                  >
                    <Eye size={16} />
                    Preview & Download Resume
                  </Button>
                }
              />
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-3 ${isDarkMode ? "border-slate-600 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-50"}`}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-slate-800"}`}>About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                I'm a dedicated Java Developer with over 3 plus years of professional experience at Indo Sakura Software,
                where I've specialized in developing scalable, efficient, and maintainable software solutions using Java
                and related frameworks. My expertise spans both backend development and frontend technologies.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                I have extensive experience in agile methodologies, delivering high-quality code with zero escalations.
                My collaborative approach with cross-functional teams ensures responsive, pixel-perfect, and properly
                functioning deliverables that meet business requirements and user expectations.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                I'm passionate about continuous learning and professional development, having completed Full Stack Java
                Developer certification from J Spiders Bangalore and PGDCA from NICT Rayagada. I thrive on solving
                complex problems and contributing to team success through technical excellence and effective
                communication.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                      B.Tech in Electrical & Electronics Engineering
                    </h4>
                    <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Parala Maharaja Engineering College, Berhampur (2020)
                    </p>
                    <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>CGPA: 8.7/10.0</p>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                      Diploma in Electrical Engineering
                    </h4>
                    <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      UGMIT, Rayagada (2017)
                    </p>
                    <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Marks: 76%</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"}`}>
                <h3
                  className={`text-xl font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? "text-white" : "text-slate-800"}`}
                >
                  <Award size={20} className="text-blue-600" />
                  Achievements & Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Full Stack Java Developer - J Spiders Bangalore
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      PGDCA Course - NICT Rayagada
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      First Prize Winner - Block Level Debate Competition
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      Selected for Super 20 Program - High-performing students recognition
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              Featured Projects
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
              Here are some of my recent projects that demonstrate enterprise-level problem-solving and full-stack
              development expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                      {project.title}
                    </h3>
                    <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`${isDarkMode ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-700"}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`flex items-center gap-2 ${isDarkMode ? "border-slate-600 text-slate-300 hover:bg-slate-700" : "bg-transparent"}`}
                      >
                        <Github size={16} />
                        Code
                      </Button>
                      <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              Technical Expertise
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
              Comprehensive skill set in Java ecosystem with hands-on experience in full-stack development and
              enterprise applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`p-6 ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"}`}
                >
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} className="bg-blue-600 text-white hover:bg-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Professional Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${isDarkMode ? "bg-gradient-to-r from-slate-700 to-slate-800" : "bg-gradient-to-r from-blue-50 to-slate-50"}`}
          >
            <h3 className={`text-2xl font-semibold mb-6 text-center ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              Professional Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className={isDarkMode ? "text-slate-300" : "text-slate-700"}>
                    <strong>Enterprise Development:</strong> 3+ years at Indo Sakura Software building scalable
                    applications
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className={isDarkMode ? "text-slate-300" : "text-slate-700"}>
                    <strong>Full-Stack Expertise:</strong> Proficient in Java backend and modern frontend technologies
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className={isDarkMode ? "text-slate-300" : "text-slate-700"}>
                    <strong>Agile Methodology:</strong> Experienced in delivering high-quality code with zero
                    escalations
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className={isDarkMode ? "text-slate-300" : "text-slate-700"}>
                    <strong>Cross-functional Collaboration:</strong> Strong communication and teamwork skills
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className={isDarkMode ? "text-slate-300" : "text-slate-700"}>
                    <strong>Problem Solving:</strong> Expertise in debugging, code optimization, and performance tuning
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className={isDarkMode ? "text-slate-300" : "text-slate-700"}>
                    <strong>Continuous Learning:</strong> Committed to professional development and staying current with
                    technology
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <ResumeSection isDarkMode={isDarkMode} />

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              Let's Work Together
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
              Have a Java project in mind? I'd love to discuss how we can build something exceptional together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-600" size={20} />
                  <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>amulyapradhan264@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600" size={20} />
                  <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>+91 7978465648</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" size={20} />
                  <span className={isDarkMode ? "text-slate-300" : "text-slate-600"}>Odisha, India</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`flex items-center gap-2 ${isDarkMode ? "border-slate-600 text-slate-300 hover:bg-slate-800" : "bg-transparent"}`}
                  >
                    <Github size={16} />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`flex items-center gap-2 ${isDarkMode ? "border-slate-600 text-slate-300 hover:bg-slate-800" : "bg-transparent"}`}
                    onClick={() => window.open("https://www.linkedin.com/in/amulya-pradhan-419b65227", "_blank")}
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </Button>
                  <EnhancedResumePreview
                    triggerButton={
                      <Button
                        variant="outline"
                        size="sm"
                        className={`flex items-center gap-2 ${isDarkMode ? "border-slate-600 text-slate-300 hover:bg-slate-800" : "bg-transparent"}`}
                      >
                        <Download size={16} />
                        Resume
                      </Button>
                    }
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                <form className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className={
                        isDarkMode
                          ? "border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                          : "border-slate-300"
                      }
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className={
                        isDarkMode
                          ? "border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                          : "border-slate-300"
                      }
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className={`resize-none ${isDarkMode ? "border-slate-600 bg-slate-700 text-white placeholder:text-slate-400" : "border-slate-300"}`}
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-slate-800 text-white" : "bg-slate-800 text-white"}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2022 Amulya Pradhan. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </div>
  )
}
