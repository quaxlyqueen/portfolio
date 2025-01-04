import express from "express";
import cors from "cors";
import postmark from "postmark";
const app = express();
const port = 3001; // Example port
const client = new postmark.ServerClient(
  "d15a4575-17f1-4ead-8e53-69eb2faea982",
);

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
