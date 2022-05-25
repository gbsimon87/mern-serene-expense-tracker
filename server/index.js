const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

// connect to mongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // added line
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      // production server URL",
    ],
    credentials: true,
  })
);

// added line
app.use(errorHandler);

// Serve client // added line
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

// set up routes
app.use("/auth", require("./routers/userRouter"));
app.use("/transaction", require("./routers/transactionRouter"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
