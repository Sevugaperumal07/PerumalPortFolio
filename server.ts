import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    
    console.log("Contact Form Submission:", { name, email, message });

    // In a real application, you would use an email service like SendGrid, Mailgun, or Resend here.
    // For this demonstration, we'll simulate a successful submission.
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    res.json({ success: true, message: "Thank you for your message! I'll get back to you soon." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
