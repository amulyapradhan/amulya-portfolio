"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, Download, X, ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import { DownloadButton } from "@/components/download-button"

interface ResumePreviewProps {
  filePath: string
  filename?: string
  triggerButton?: React.ReactNode
  className?: string
}

export function ResumePreview({
  filePath,
  filename = "Amulya_Pradhan_Resume.pdf",
  triggerButton,
  className = "",
}: ResumePreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50))
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360)
  const handleReset = () => {
    setZoom(100)
    setRotation(0)
  }

  const handleLoad = () => {
    setIsLoading(false)
    setError(null)
  }

  const handleError = () => {
    setIsLoading(false)
    setError("Failed to load resume preview")
  }

  const getFileExtension = (filename: string) => {
    return filename.split(".").pop()?.toLowerCase() || ""
  }

  const renderPreviewContent = () => {
    const extension = getFileExtension(filename)

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <div className="text-red-500 mb-4">
            <X size={48} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Preview Not Available</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">{error}</p>
          <DownloadButton filePath={filePath} filename={filename} variant="outline" size="sm" showFeedback={false} />
        </div>
      )
    }

    if (extension === "pdf") {
      return (
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}
          <iframe
            src={`${filePath}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-96 border-0 rounded-lg"
            style={{
              transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
              transformOrigin: "center center",
            }}
            onLoad={handleLoad}
            onError={handleError}
            title="Resume Preview"
          />
        </div>
      )
    }

    // For non-PDF files, show a placeholder with file info
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center bg-slate-50 dark:bg-slate-800 rounded-lg">
        <div className="text-6xl mb-4">📄</div>
        <h3 className="text-lg font-semibold mb-2">{filename}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Preview not available for {extension.toUpperCase()} files
        </p>
        <DownloadButton filePath={filePath} filename={filename} variant="outline" size="sm" showFeedback={false} />
      </div>
    )
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Resume Preview - {filename}</span>
            <div className="flex items-center gap-2">
              {getFileExtension(filename) === "pdf" && !error && (
                <>
                  <Button variant="ghost" size="sm" onClick={handleZoomOut} disabled={zoom <= 50}>
                    <ZoomOut size={16} />
                  </Button>
                  <span className="text-sm font-mono min-w-[3rem] text-center">{zoom}%</span>
                  <Button variant="ghost" size="sm" onClick={handleZoomIn} disabled={zoom >= 200}>
                    <ZoomIn size={16} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleRotate}>
                    <RotateCw size={16} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleReset}>
                    Reset
                  </Button>
                </>
              )}
              <DownloadButton filePath={filePath} filename={filename} variant="default" size="sm" showFeedback={false}>
                <Download size={16} />
                <span>Download</span>
              </DownloadButton>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-auto max-h-[calc(90vh-8rem)]">{renderPreviewContent()}</div>
      </DialogContent>
    </Dialog>
  )
}
