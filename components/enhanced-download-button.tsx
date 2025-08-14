"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"
import { downloadResume, getFileExtension, getFileIcon, type DownloadOptions } from "@/utils/downloadResume"
import { useToast } from "@/components/toast"

interface EnhancedDownloadButtonProps {
  filePath: string
  filename?: string
  variant?: "default" | "outline" | "secondary"
  size?: "sm" | "default" | "lg"
  className?: string
  children?: React.ReactNode
  showIcon?: boolean
}

export function EnhancedDownloadButton({
  filePath,
  filename = "Amulya_Pradhan_Resume.pdf",
  variant = "default",
  size = "default",
  className = "",
  children,
  showIcon = true,
}: EnhancedDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const { addToast } = useToast()

  const handleDownload = async () => {
    const options: DownloadOptions = {
      filename,
      onStart: () => {
        setIsDownloading(true)
        addToast({
          type: "info",
          title: "Download Started",
          message: `Preparing ${filename} for download...`,
          duration: 3000,
        })
      },
      onSuccess: () => {
        setIsDownloading(false)
        addToast({
          type: "success",
          title: "Download Complete",
          message: `${filename} has been downloaded successfully!`,
          duration: 5000,
        })
      },
      onError: (error) => {
        setIsDownloading(false)
        addToast({
          type: "error",
          title: "Download Failed",
          message: error,
          duration: 7000,
        })
      },
    }

    await downloadResume(filePath, options)
  }

  const extension = getFileExtension(filename)
  const fileIcon = getFileIcon(extension)

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant={variant}
      size={size}
      className={`flex items-center gap-2 transition-all duration-200 ${className}`}
    >
      {isDownloading ? <Loader2 className="animate-spin" size={16} /> : showIcon ? <Download size={16} /> : null}
      {children || (
        <span className="flex items-center gap-1">
          <span>{fileIcon}</span>
          <span>{isDownloading ? "Downloading..." : "Download Resume"}</span>
        </span>
      )}
    </Button>
  )
}
