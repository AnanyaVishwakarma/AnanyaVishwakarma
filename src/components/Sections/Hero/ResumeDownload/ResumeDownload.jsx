import React from "react";
import { Button } from "../../../Common/Button/Button";

export default function ResumeDownload({
  // use PUBLIC_URL so it works on GitHub Pages
  url = `${process.env.PUBLIC_URL}/Resume.pdf`,
  filename = "AnanyaVishwakarma_Resume.pdf",
}) {
  async function handleDownload(e) {
    e.preventDefault();
    try {
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) throw new Error("Network Error");

      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } catch (err) {
      console.error(err);
      // fallback: open directly in new tab
      window.open(url, "_blank", "noopener");
    }
  }

  return (
    <Button
      className="hero-buttons animate-fade-in-up"
      variant="primary"
      size="lg"
      onClick={handleDownload}
    >
      Resume
    </Button>
  );
}
