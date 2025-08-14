"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EnhancedResumePreview } from "@/components/enhanced-resume-preview"
import { FileText, Eye, Calendar, User, Briefcase, Download } from "lucide-react"

interface ResumeSectionProps {
  isDarkMode: boolean
}

export function ResumeSection({ isDarkMode }: ResumeSectionProps) {
  const resumeInfo = {
    filename: "Amulya_Pradhan_Resume.pdf",
    filePath: "/resume/Amulya_Pradhan_Resume.pdf",
    lastUpdated: "December 2024",
    fileSize: "245 KB",
    pages: "2 pages",
  }

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            Professional Resume
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            Download my comprehensive resume or preview it online to learn more about my professional experience,
            skills, and achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card
            className={`overflow-hidden ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"}`}
          >
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <FileText className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                        {resumeInfo.filename}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        Last updated: {resumeInfo.lastUpdated}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-blue-600" />
                      <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        Updated {resumeInfo.lastUpdated}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-blue-600" />
                      <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        {resumeInfo.pages} • {resumeInfo.fileSize}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-blue-600" />
                      <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        Java Developer • 3+ Years Experience
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-blue-600 text-white">Professional Format</Badge>
                    <Badge className="bg-green-600 text-white">ATS Optimized</Badge>
                    <Badge className="bg-purple-600 text-white">PDF Format</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <EnhancedResumePreview
                        triggerButton={
                          <button
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                              isDarkMode
                                ? "border-slate-600 text-slate-300 hover:bg-slate-600"
                                : "border-slate-300 text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <Eye size={16} />
                            Preview Resume
                          </button>
                        }
                      />
                      <EnhancedResumePreview
                        triggerButton={
                          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                            <Download size={16} />
                            Download Resume
                          </button>
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className={`aspect-[3/4] rounded-lg border-2 border-dashed flex items-center justify-center ${
                      isDarkMode ? "border-slate-600 bg-slate-800" : "border-slate-300 bg-white"
                    }`}
                  >
                    <div className="text-center">
                      <FileText size={48} className="text-blue-600 mx-auto mb-3" />
                      <p className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        Resume Preview
                      </p>
                      <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        Click preview to view full document
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">PDF</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className={`text-2xl font-semibold mb-6 text-center ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            What's Inside My Resume
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className={`p-6 ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white border-slate-200"}`}>
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-blue-600" size={20} />
                <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                  Professional Experience
                </h4>
              </div>
              <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                Detailed work history including 3+ years at Indo Sakura Software with key achievements and
                responsibilities.
              </p>
            </Card>
            <Card className={`p-6 ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white border-slate-200"}`}>
              <div className="flex items-center gap-3 mb-3">
                <FileText className="text-blue-600" size={20} />
                <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-800"}`}>Technical Skills</h4>
              </div>
              <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                Comprehensive list of programming languages, frameworks, databases, and development tools with
                proficiency levels.
              </p>
            </Card>
            <Card className={`p-6 ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-white border-slate-200"}`}>
              <div className="flex items-center gap-3 mb-3">
                <User className="text-blue-600" size={20} />
                <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                  Education & Certifications
                </h4>
              </div>
              <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                Academic background, professional certifications, and continuous learning achievements in software
                development.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
