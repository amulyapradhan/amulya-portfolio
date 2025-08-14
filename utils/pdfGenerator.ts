export const generatePDFFromHTML = async (htmlContent: string): Promise<Blob> => {
  // This would typically use a library like Puppeteer or jsPDF
  // For now, we'll create a simple HTML file that can be printed to PDF

  const printableHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Resume - Amulya Pradhan</title>
    <style>
        @media print {
            body { margin: 0; }
            .no-print { display: none !important; }
        }
        @page {
            size: A4;
            margin: 0.5in;
        }
    </style>
</head>
<body>
    ${htmlContent}
    <script>
        window.onload = function() {
            setTimeout(function() {
                window.print();
            }, 500);
        }
    </script>
</body>
</html>
  `

  return new Blob([printableHTML], { type: "text/html" })
}

export const downloadResumePDF = async () => {
  try {
    // Open the resume page in a new window for printing
    const resumeWindow = window.open("/resume", "_blank")
    if (resumeWindow) {
      resumeWindow.focus()
      // The resume page will handle the print functionality
    }
  } catch (error) {
    console.error("Failed to open resume for printing:", error)
  }
}
