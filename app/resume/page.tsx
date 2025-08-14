"use client"

import { ResumeDocument } from "@/components/resume-document"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft, Printer } from "lucide-react"
import { generateResumeHTML, defaultResumeData } from "@/utils/resumeGenerator"
import { useState } from "react"
import Link from "next/link"

export default function ResumePage() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const htmlContent = generateResumeHTML(defaultResumeData)
      const blob = new Blob([htmlContent], { type: "text/html" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Amulya_Pradhan_Resume.html"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with actions */}
      <div className="bg-white shadow-sm border-b print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handlePrint} className="flex items-center gap-2 bg-transparent">
              <Printer size={16} />
              Print
            </Button>
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <Download size={16} />
              {isDownloading ? "Downloading..." : "Download HTML"}
            </Button>
          </div>
        </div>
      </div>

      {/* Resume content */}
      <div className="py-8 print:py-0">
        <ResumeDocument />
      </div>
    </div>
  )
}
