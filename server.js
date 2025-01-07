const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // 解析表單資料

// 提供靜態文件的路徑
app.use(express.static("public"));

// 測試郵件發送功能
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "9143syarnstuff@gmail.com", // 替換為你的 Gmail
    pass: "iboo yrst vgsx xawr" // 替換為生成的應用程式密碼
  }
});

transporter.sendMail({
  from: "9143syarnstuff@gmail.com",
  to: "9143syarnstuff@gmail.com",
  subject: "Test Email",
  text: "This is a test email."
}, (error, info) => {
  if (error) {
    console.error("Test mail error:", error);
  } else {
    console.log("Test mail sent:", info.response);
  }
});

// 表單提交處理
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  let mailOptions = {
    from: email,
    to: "9143syarnstuff@gmail.com",
    subject: `Message from ${name}`, // 修正語法錯誤，添加反引號
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // 修正語法錯誤，添加反引號
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error details:", error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Message sent successfully!");
    }
  });
});

// 啟動伺服器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // 修正語法錯誤，添加反引號
});
