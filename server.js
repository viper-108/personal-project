const express = require("express");
const path = require("path");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  const { receiverEmail, websiteLink } = req.body;

  try {
    await resend.emails.send({
      from: "Valentine 💖 <onboarding@resend.dev>",
      to: receiverEmail,
      subject: "A Special Surprise For You ❤️",
      html: `
        <h2>Hi Priya 💖</h2>
        <p>Someone very special has something for you...</p>
        <a href="${websiteLink}" style="font-size:20px;color:pink;">
          Click Here My Love 💌
        </a>
      `
    });

    res.json({ message: "Email sent successfully 💌" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending email" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
