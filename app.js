import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
const pport = process.env.PORTNO;
mongoose
    .connect(process.env.MONGO_url)
    .then(() => app.listen(pport))
    .then(() => console.log("Connected to the database and listining to the localhost 5000")
    )
.catch((err) => console.log(err));
