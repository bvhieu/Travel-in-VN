require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello test protect server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const startServer = async () => {
  try {
    const port = process.env.PORT || 5000;
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log("Error while starting the server 💥", error);
  }
};

startServer();

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  
})