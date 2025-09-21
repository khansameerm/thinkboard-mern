import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

//middleware
app.use(express.json())       //enables me to use req.body to fetch values in notesController by parsing JSON Bodies: req.body
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(rateLimiter)

// app.use((req, res, next) => {
//     console.log(`Request method is ${req.method} & Request URL is ${req.url}`)
//     next();
// });

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});

