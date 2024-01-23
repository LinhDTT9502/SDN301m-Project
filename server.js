import express from "express";
import connectDB from "./database/dtb.js";
import { app } from "./app.js";

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (request, response) => {
//   response.send({ message: "Hello from an Express API!" });
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  connectDB();
});
