export interface DownloadOptions {
  filename?: string
  onStart?: () => void
  onSuccess?: () => void
  onError?: (error: string) => void
}

export const downloadResume = async (filePath: string, options: DownloadOptions = {}) => {
  const { filename = "Amulya_Pradhan_Resume.pdf", onStart, onSuccess, onError } = options

  try {
    onStart?.()

    // Fetch the file
    const response = await fetch(filePath)

    if (!response.ok) {
      throw new Error(`Failed to fetch resume: ${response.statusText}`)
    }

    // Get the blob
    const blob = await response.blob()

    // Create download link
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename

    // Trigger download
    document.body.appendChild(link)
    link.click()

    // Cleanup
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)

    onSuccess?.()
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Download failed"
    onError?.(errorMessage)
  }
}

export const getFileExtension = (filename: string): string => {
  return filename.split(".").pop()?.toLowerCase() || ""
}

export const getFileIcon = (extension: string) => {
  switch (extension) {
    case "pdf":
      return "📄"
    case "doc":
    case "docx":
      return "📝"
    case "txt":
      return "📋"
    default:
      return "📁"
  }
}
