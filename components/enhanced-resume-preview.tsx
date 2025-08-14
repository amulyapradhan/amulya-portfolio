"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, Download, ZoomIn, ZoomOut, Printer, Share2 } from "lucide-react"
import { ResumeDocument } from "@/components/resume-document"
import { generateResumeHTML, defaultResumeData } from "@/utils/resumeGenerator"

interface EnhancedResumePreviewProps {
  triggerButton?: React.ReactNode
  className?: string
}

export function EnhancedResumePreview({ triggerButton, className = "" }: EnhancedResumePreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [isDownloading, setIsDownloading] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50))
  const handleReset = () => setZoom(100)

  const handleDownloadHTML = async () => {
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
    if (resumeRef.current) {
      const printWindow = window.open("", "_blank")
      if (printWindow) {
        const htmlContent = generateResumeHTML(defaultResumeData)
        printWindow.document.write(htmlContent)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Amulya Pradhan - Resume",
          text: "Check out my professional resume",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Share failed:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerButton || (
          <Button variant="outline" className={`flex items-center gap-2 ${className}`}>
            <Eye size={16} />
            Preview Resume
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Resume Preview - Amulya Pradhan</span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleZoomOut} disabled={zoom <= 50}>
                <ZoomOut size={16} />
              </Button>
              <span className="text-sm font-mono min-w-[3rem] text-center">{zoom}%</span>
              <Button variant="ghost" size="sm" onClick={handleZoomIn} disabled={zoom >= 200}>
                <ZoomIn size={16} />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleReset}>
                Reset
              </Button>
              <Button variant="ghost" size="sm" onClick={handlePrint}>
                <Printer size={16} />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 size={16} />
              </Button>
              <Button
                onClick={handleDownloadHTML}
                disabled={isDownloading}
                variant="default"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Download size={16} />
                <span>{isDownloading ? "Downloading..." : "Download"}</span>
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-auto max-h-[calc(95vh-8rem)] bg-gray-100 p-4 rounded-lg">
          <div
            ref={resumeRef}
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top center",
              transition: "transform 0.2s ease",
            }}
          >
            <ResumeDocument />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
