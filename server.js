const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const app = require("./app");

// process.on("uncaughtException", (err) => {
//   console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
//   console.log(`${err.name}: ${err.message}`);
//   process.exit(1);
// });

mongoose
  .connect(process.env.DB_CONNECTION_STR)
  .then(() => console.log("DB connection successful"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// process.on("unhandledRejection", (err) => {
//   console.log(err.name);
//   console.log(err.message);
//   console.log("UNHANDLED REJECTION! 💥 Shutting down...");
//   server.close(() => {
//     process.exit(1);
//   });
// });

// process.on("SIGTERM", () => {
//   console.log("👋 SIGTERM RECEIVED. Shutting down gracefully..");
//   server.close(() => {
//     console.log("💥 Process terminated!");
//   });
// });
