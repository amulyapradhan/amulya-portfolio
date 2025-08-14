"use client"

export function ResumeDocument() {
  return (
    <div className="resume-container bg-white text-gray-900 font-sans leading-relaxed">
      <style jsx>{`
        .resume-container {
          width: 8.5in;
          min-height: 11in;
          margin: 0 auto;
          padding: 0.75in;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.4;
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

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
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

        .experience-item,
        .education-item {
          margin-bottom: 1rem;
        }

        .job-header,
        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .job-title,
        .degree {
          font-weight: 600;
          color: #1e293b;
          font-size: 1rem;
        }

        .company,
        .institution {
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

        .description {
          margin-top: 0.5rem;
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
            box-shadow: none;
            margin: 0;
            padding: 0.5in;
          }
        }

        @page {
          size: A4;
          margin: 0.5in;
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <h1 className="name">Amulya Pradhan</h1>
        <h2 className="title">Java Developer</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span>📧</span>
            <span>amulyapradhan264@gmail.com</span>
          </div>
          <div className="contact-item">
            <span>📱</span>
            <span>+91 7978465648</span>
          </div>
          <div className="contact-item">
            <span>📍</span>
            <span>Odisha, India</span>
          </div>
          <div className="contact-item">
            <span>💼</span>
            <span>linkedin.com/in/amulya-pradhan-419b65227</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="section">
        <h3 className="section-title">Professional Summary</h3>
        <p className="summary">
          Experienced Java Developer with 3+ years of professional experience at Indo Sakura Software, specializing in
          Spring Boot, microservices architecture, and full-stack development. Proven track record of delivering
          scalable, efficient, and maintainable software solutions using Java ecosystem technologies. Strong expertise
          in agile methodologies with zero escalations record, demonstrating excellent problem-solving abilities and
          collaborative teamwork in cross-functional environments.
        </p>
      </div>

      {/* Professional Experience */}
      <div className="section">
        <h3 className="section-title">Professional Experience</h3>
        <div className="experience-item">
          <div className="job-header">
            <div>
              <div className="job-title">Java Developer</div>
              <div className="company">Indo Sakura Software</div>
            </div>
            <div className="date">2021 - Present</div>
          </div>
          <div className="description">
            <ul>
              <li>
                Developed comprehensive warehouse management software with automated storage, business validation, and
                retrieval functionalities using Java Spring Boot and Oracle DB
              </li>
              <li>
                Built multi-service booking platform for travel management with cab, bike, bus, and hotel booking
                capabilities using microservices architecture
              </li>
              <li>
                Implemented fantasy gaming application for BGMI/CODM contests with virtual currency system, Razorpay
                payment integration, and real-time leaderboards
              </li>
              <li>
                Collaborated with cross-functional teams to deliver responsive, pixel-perfect applications meeting
                business requirements with zero escalations
              </li>
              <li>
                Optimized application performance and implemented best practices for code maintainability and
                scalability
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="section">
        <h3 className="section-title">Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-category-title">Core Java & Frameworks</div>
            <div className="skill-list">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Spring Framework</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">Hibernate/JPA</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-category-title">Frontend & Database</div>
            <div className="skill-list">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">Oracle DB</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-category-title">Development Tools</div>
            <div className="skill-list">
              <span className="skill-tag">Eclipse</span>
              <span className="skill-tag">STS</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">IntelliJ IDEA</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">SVN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="section">
        <h3 className="section-title">Education</h3>
        <div className="education-item">
          <div className="education-header">
            <div>
              <div className="degree">B.Tech in Electrical & Electronics Engineering</div>
              <div className="institution">Parala Maharaja Engineering College, Berhampur</div>
            </div>
            <div className="date">2020</div>
          </div>
          <div style={{ fontSize: "0.9rem", color: "#64748b", marginTop: "0.25rem" }}>CGPA: 8.7/10.0</div>
        </div>
        <div className="education-item">
          <div className="education-header">
            <div>
              <div className="degree">Diploma in Electrical Engineering</div>
              <div className="institution">UGMIT, Rayagada</div>
            </div>
            <div className="date">2017</div>
          </div>
          <div style={{ fontSize: "0.9rem", color: "#64748b", marginTop: "0.25rem" }}>Marks: 76%</div>
        </div>
      </div>

      {/* Certifications & Achievements */}
      <div className="section">
        <h3 className="section-title">Certifications & Achievements</h3>
        <div className="achievements">
          <div className="achievement-item">
            <span className="achievement-bullet">•</span>
            <span>Full Stack Java Developer - J Spiders Bangalore</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-bullet">•</span>
            <span>PGDCA Course - NICT Rayagada</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-bullet">•</span>
            <span>First Prize Winner - Block Level Debate Competition</span>
          </div>
          <div className="achievement-item">
            <span className="achievement-bullet">•</span>
            <span>Selected for Super 20 Program - High-performing students</span>
          </div>
        </div>
      </div>

      {/* Key Projects */}
      <div className="section">
        <h3 className="section-title">Key Projects</h3>
        <div className="experience-item">
          <div className="job-header">
            <div>
              <div className="job-title">Automated Warehouse Management System</div>
              <div className="company">Enterprise Application</div>
            </div>
          </div>
          <div className="description">
            <ul>
              <li>
                Comprehensive warehouse management with automated storage, validation, and retrieval using Java Spring
                Boot and Oracle DB
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-item">
          <div className="job-header">
            <div>
              <div className="job-title">We Move All - Multi-Service Booking Platform</div>
              <div className="company">Travel Management Application</div>
            </div>
          </div>
          <div className="description">
            <ul>
              <li>
                Full-stack travel booking platform with microservices architecture, real-time booking, and history
                tracking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
