"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Download, Eye, ChevronDown, FileText } from "lucide-react"
import { ResumePreview } from "@/components/resume-preview"
import { DownloadButton } from "@/components/download-button"

interface PreviewDownloadButtonProps {
  filePath: string
  filename?: string
  variant?: "default" | "outline" | "secondary"
  size?: "sm" | "default" | "lg"
  className?: string
  showDropdown?: boolean
}

export function PreviewDownloadButton({
  filePath,
  filename = "Amulya_Pradhan_Resume.pdf",
  variant = "default",
  size = "default",
  className = "",
  showDropdown = true,
}: PreviewDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  if (!showDropdown) {
    return (
      <div className="flex gap-2">
        <ResumePreview
          filePath={filePath}
          filename={filename}
          triggerButton={
            <Button variant="outline" size={size} className="flex items-center gap-2 bg-transparent">
              <Eye size={16} />
              Preview
            </Button>
          }
        />
        <DownloadButton
          filePath={filePath}
          filename={filename}
          variant={variant}
          size={size}
          className={className}
          showFeedback={false}
        />
      </div>
    )
  }

  return (
    <div className="flex">
      <DownloadButton
        filePath={filePath}
        filename={filename}
        variant={variant}
        size={size}
        className={`rounded-r-none border-r-0 ${className}`}
        showFeedback={false}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant}
            size={size}
            className="rounded-l-none px-2 border-l border-l-slate-300 dark:border-l-slate-600"
          >
            <ChevronDown size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <ResumePreview
            filePath={filePath}
            filename={filename}
            triggerButton={
              <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="cursor-pointer">
                <Eye size={16} className="mr-2" />
                Preview Resume
              </DropdownMenuItem>
            }
          />
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              const link = document.createElement("a")
              link.href = filePath
              link.download = filename
              link.click()
            }}
          >
            <Download size={16} className="mr-2" />
            Quick Download
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              window.open(filePath, "_blank")
            }}
          >
            <FileText size={16} className="mr-2" />
            Open in New Tab
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
