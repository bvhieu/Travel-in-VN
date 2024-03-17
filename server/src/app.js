require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const authRouter = require("./routes/authRoutes");

const app = express();

app.use(express.json());
// app.use(cookieParser(process.env.JWT_SECRET));
// app.use(express.static("public"));
// app.use(fileUpload());

app.use("/api/v1/auth", authRouter);

const startServer = async () => {
  try {
    const port = process.env.PORT || 8000;
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`✅ [server]: Server is running on port ${port}...`)
    );
  } catch (error) {
    console.log("Error while starting the server 💥", error);
  }
};

startServer();
