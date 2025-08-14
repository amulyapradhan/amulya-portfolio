"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { downloadResume, getFileExtension, getFileIcon, type DownloadOptions } from "@/utils/downloadResume"

interface DownloadButtonProps {
  filePath: string
  filename?: string
  variant?: "default" | "outline" | "secondary"
  size?: "sm" | "default" | "lg"
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
  showFeedback?: boolean
}

export function DownloadButton({
  filePath,
  filename = "Amulya_Pradhan_Resume.pdf",
  variant = "default",
  size = "default",
  className = "",
  children,
  showIcon = true,
  showFeedback = true,
}: DownloadButtonProps) {
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleDownload = async () => {
    const options: DownloadOptions = {
      filename,
      onStart: () => setDownloadState("downloading"),
      onSuccess: () => {
        setDownloadState("success")
        if (showFeedback) {
          setTimeout(() => setDownloadState("idle"), 3000)
        }
      },
      onError: (error) => {
        setDownloadState("error")
        setErrorMessage(error)
        if (showFeedback) {
          setTimeout(() => {
            setDownloadState("idle")
            setErrorMessage("")
          }, 5000)
        }
      },
    }

    await downloadResume(filePath, options)
  }

  const getButtonContent = () => {
    const extension = getFileExtension(filename)
    const fileIcon = getFileIcon(extension)

    switch (downloadState) {
      case "downloading":
        return (
          <>
            <Loader2 className="animate-spin" size={16} />
            <span>Downloading...</span>
          </>
        )
      case "success":
        return (
          <>
            <CheckCircle className="text-green-500" size={16} />
            <span>Downloaded!</span>
          </>
        )
      case "error":
        return (
          <>
            <AlertCircle className="text-red-500" size={16} />
            <span>Failed</span>
          </>
        )
      default:
        return (
          <>
            {showIcon && <Download size={16} />}
            {children || (
              <span className="flex items-center gap-1">
                <span>{fileIcon}</span>
                <span>Download Resume</span>
              </span>
            )}
          </>
        )
    }
  }

  const getButtonVariant = () => {
    if (downloadState === "error") return "destructive"
    return variant
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        onClick={handleDownload}
        disabled={downloadState === "downloading"}
        variant={getButtonVariant()}
        size={size}
        className={`flex items-center gap-2 transition-all duration-200 ${className}`}
      >
        {getButtonContent()}
      </Button>

      {showFeedback && downloadState === "error" && errorMessage && (
        <p className="text-sm text-red-500 text-center max-w-xs">{errorMessage}</p>
      )}

      {showFeedback && downloadState === "success" && (
        <p className="text-sm text-green-600 text-center">Resume downloaded successfully!</p>
      )}
    </div>
  )
}
