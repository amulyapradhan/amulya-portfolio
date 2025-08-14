export interface ResumeData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    linkedin: string
  }
  summary: string
  experience: Array<{
    title: string
    company: string
    duration: string
    responsibilities: string[]
  }>
  skills: {
    [category: string]: string[]
  }
  education: Array<{
    degree: string
    institution: string
    year: string
    grade?: string
  }>
  achievements: string[]
  projects: Array<{
    name: string
    description: string
    technologies: string[]
  }>
}

export const generateResumeHTML = (data: ResumeData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.personalInfo.name} - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.4;
            color: #374151;
            background: white;
        }
        
        .resume-container {
            width: 8.5in;
            min-height: 11in;
            margin: 0 auto;
            padding: 0.75in;
            background: white;
        }
        
        .header {
            text-align: center;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 1rem;
        }
        
        .name {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 0.5rem;
            letter-spacing: -0.025em;
        }
        
        .title {
            font-size: 1.25rem;
            color: #2563eb;
            font-weight: 600;
            margin-bottom: 0.75rem;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            flex-wrap: wrap;
            font-size: 0.9rem;
            color: #64748b;
        }
        
        .section {
            margin-bottom: 1.5rem;
        }
        
        .section-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 0.25rem;
        }
        
        .experience-item, .education-item {
            margin-bottom: 1rem;
        }
        
        .job-header, .education-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 0.5rem;
        }
        
        .job-title, .degree {
            font-weight: 600;
            color: #1e293b;
            font-size: 1rem;
        }
        
        .company, .institution {
            color: #2563eb;
            font-weight: 500;
            font-size: 0.95rem;
        }
        
        .date {
            color: #64748b;
            font-size: 0.85rem;
            font-weight: 500;
            white-space: nowrap;
        }
        
        .description ul {
            margin: 0;
            padding-left: 1.25rem;
        }
        
        .description li {
            margin-bottom: 0.25rem;
            font-size: 0.9rem;
            color: #374151;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
        
        .skill-category {
            background: #f8fafc;
            padding: 0.75rem;
            border-radius: 0.5rem;
            border-left: 3px solid #2563eb;
        }
        
        .skill-category-title {
            font-weight: 600;
            color: #1e293b;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }
        
        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.25rem;
        }
        
        .skill-tag {
            background: #dbeafe;
            color: #1d4ed8;
            padding: 0.125rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .summary {
            font-size: 0.95rem;
            color: #374151;
            line-height: 1.6;
            text-align: justify;
        }
        
        .achievements {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
        }
        
        .achievement-item {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: #374151;
        }
        
        .achievement-bullet {
            color: #2563eb;
            font-weight: bold;
            margin-top: 0.125rem;
        }
        
        @media print {
            .resume-container {
                margin: 0;
                padding: 0.5in;
            }
        }
        
        @page {
            size: A4;
            margin: 0.5in;
        }
    </style>
</head>
<body>
    <div class="resume-container">
        <!-- Header -->
        <div class="header">
            <h1 class="name">${data.personalInfo.name}</h1>
            <h2 class="title">${data.personalInfo.title}</h2>
            <div class="contact-info">
                <span>📧 ${data.personalInfo.email}</span>
                <span>📱 ${data.personalInfo.phone}</span>
                <span>📍 ${data.personalInfo.location}</span>
                <span>💼 ${data.personalInfo.linkedin}</span>
            </div>
        </div>
        
        <!-- Professional Summary -->
        <div class="section">
            <h3 class="section-title">Professional Summary</h3>
            <p class="summary">${data.summary}</p>
        </div>
        
        <!-- Professional Experience -->
        <div class="section">
            <h3 class="section-title">Professional Experience</h3>
            ${data.experience
              .map(
                (exp) => `
                <div class="experience-item">
                    <div class="job-header">
                        <div>
                            <div class="job-title">${exp.title}</div>
                            <div class="company">${exp.company}</div>
                        </div>
                        <div class="date">${exp.duration}</div>
                    </div>
                    <div class="description">
                        <ul>
                            ${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
        
        <!-- Technical Skills -->
        <div class="section">
            <h3 class="section-title">Technical Skills</h3>
            <div class="skills-grid">
                ${Object.entries(data.skills)
                  .map(
                    ([category, skills]) => `
                    <div class="skill-category">
                        <div class="skill-category-title">${category}</div>
                        <div class="skill-list">
                            ${skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
        
        <!-- Education -->
        <div class="section">
            <h3 class="section-title">Education</h3>
            ${data.education
              .map(
                (edu) => `
                <div class="education-item">
                    <div class="education-header">
                        <div>
                            <div class="degree">${edu.degree}</div>
                            <div class="institution">${edu.institution}</div>
                        </div>
                        <div class="date">${edu.year}</div>
                    </div>
                    ${edu.grade ? `<div style="font-size: 0.9rem; color: #64748b; margin-top: 0.25rem;">${edu.grade}</div>` : ""}
                </div>
            `,
              )
              .join("")}
        </div>
        
        <!-- Certifications & Achievements -->
        <div class="section">
            <h3 class="section-title">Certifications & Achievements</h3>
            <div class="achievements">
                ${data.achievements
                  .map(
                    (achievement) => `
                    <div class="achievement-item">
                        <span class="achievement-bullet">•</span>
                        <span>${achievement}</span>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
        
        <!-- Key Projects -->
        <div class="section">
            <h3 class="section-title">Key Projects</h3>
            ${data.projects
              .map(
                (project) => `
                <div class="experience-item">
                    <div class="job-header">
                        <div>
                            <div class="job-title">${project.name}</div>
                            <div class="company">${project.technologies.join(", ")}</div>
                        </div>
                    </div>
                    <div class="description">
                        <ul>
                            <li>${project.description}</li>
                        </ul>
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
    </div>
</body>
</html>
  `
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "Amulya Pradhan",
    title: "Java Developer",
    email: "amulyapradhan264@gmail.com",
    phone: "+91 7978465648",
    location: "Odisha, India",
    linkedin: "linkedin.com/in/amulya-pradhan-419b65227",
  },
  summary:
    "Experienced Java Developer with 3+ years of professional experience at Indo Sakura Software, specializing in Spring Boot, microservices architecture, and full-stack development. Proven track record of delivering scalable, efficient, and maintainable software solutions using Java ecosystem technologies. Strong expertise in agile methodologies with zero escalations record, demonstrating excellent problem-solving abilities and collaborative teamwork in cross-functional environments.",
  experience: [
    {
      title: "Java Developer",
      company: "Indo Sakura Software",
      duration: "2021 - Present",
      responsibilities: [
        "Developed comprehensive warehouse management software with automated storage, business validation, and retrieval functionalities using Java Spring Boot and Oracle DB",
        "Built multi-service booking platform for travel management with cab, bike, bus, and hotel booking capabilities using microservices architecture",
        "Implemented fantasy gaming application for BGMI/CODM contests with virtual currency system, Razorpay payment integration, and real-time leaderboards",
        "Collaborated with cross-functional teams to deliver responsive, pixel-perfect applications meeting business requirements with zero escalations",
        "Optimized application performance and implemented best practices for code maintainability and scalability",
      ],
    },
  ],
  skills: {
    "Core Java & Frameworks": [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "REST APIs",
      "Microservices",
      "Hibernate/JPA",
    ],
    "Frontend & Database": ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Oracle DB", "MySQL"],
    "Development Tools": ["Eclipse", "STS", "VS Code", "IntelliJ IDEA", "Postman", "Git", "GitHub", "SVN"],
  },
  education: [
    {
      degree: "B.Tech in Electrical & Electronics Engineering",
      institution: "Parala Maharaja Engineering College, Berhampur",
      year: "2020",
      grade: "CGPA: 8.7/10.0",
    },
    {
      degree: "Diploma in Electrical Engineering",
      institution: "UGMIT, Rayagada",
      year: "2017",
      grade: "Marks: 76%",
    },
  ],
  achievements: [
    "Full Stack Java Developer - J Spiders Bangalore",
    "PGDCA Course - NICT Rayagada",
    "First Prize Winner - Block Level Debate Competition",
    "Selected for Super 20 Program - High-performing students",
  ],
  projects: [
    {
      name: "Automated Warehouse Management System",
      description:
        "Comprehensive warehouse management with automated storage, validation, and retrieval using Java Spring Boot and Oracle DB",
      technologies: ["Java", "Spring Boot", "Oracle DB", "Microservices"],
    },
    {
      name: "We Move All - Multi-Service Booking Platform",
      description:
        "Full-stack travel booking platform with microservices architecture, real-time booking, and history tracking",
      technologies: ["Java", "Spring Boot", "React.js", "MySQL"],
    },
  ],
}
