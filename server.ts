import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client on the server
  let aiClient: GoogleGenAI | null = null;
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini AI Client initialized successfully on server side.");
  } else {
    console.warn("GEMINI_API_KEY is not defined. AI functionality will ask the user to verify configuration.");
  }

  const SUBMISSIONS_FILE = path.join(process.cwd(), 'submissions.json');

  // REST API for Campaign Inquiries submission persistence
  app.post("/api/contact/submit", async (req, res) => {
    try {
      const { name, email, brandName, website, goal, message } = req.body;
      
      if (!name || !email || !brandName || !message) {
        return res.status(400).json({ error: "Please provide all required fields (name, email, brandName, message)." });
      }

      const newSubmission = {
        id: "sub_" + Math.random().toString(36).substr(2, 9),
        name,
        email,
        brandName,
        website: website || "",
        goal,
        message,
        timestamp: new Date().toISOString()
      };

      let existingSubmissions = [];
      try {
        if (require('fs').existsSync(SUBMISSIONS_FILE)) {
          const fileData = require('fs').readFileSync(SUBMISSIONS_FILE, 'utf-8');
          existingSubmissions = JSON.parse(fileData);
        }
      } catch (readErr) {
        console.error("Error reading submissions.json file, starting fresh:", readErr);
      }

      existingSubmissions.push(newSubmission);

      try {
        require('fs').writeFileSync(SUBMISSIONS_FILE, JSON.stringify(existingSubmissions, null, 2), 'utf-8');
        console.log(`[Submission Success] Standard inquiry received & stored securely on server for: ${brandName}`);
      } catch (writeErr) {
        console.error("Error writing submission to submissions.json:", writeErr);
      }

      res.json({ 
        success: true, 
        message: "Inquiry persisted successfully on RenovaGrow server.",
        submission: newSubmission
      });
    } catch (error: any) {
      console.error("Error storing inquiry submission:", error);
      res.status(500).json({ error: error?.message || "Failed to persist core campaign parameters." });
    }
  });

  // Serve static assets and main application
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Critical server configuration error:", error);
});
