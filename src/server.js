import express from "express";
import cors from "cors";
import postmark from "postmark";
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3001; // Example port
const apiKey = process.env.API_KEY;
const client = new postmark.ServerClient(apiKey);

app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// Example API endpoint
app.post("/api/send-email", (req, res) => {
  const email = {
    From: "contact@joshashton.dev",
    To: "me@joshashton.dev",
    Subject: req.body.name + " - " + req.body.emailAddress,
    TextBody: req.body.message,
    MessageStream: "outbound",
  };

  client.sendEmail(email);
  res.json({ text: "email sent!" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
