import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/db.js';
import cors from 'cors';
import userRoutes from './routes/userRoute.js';
import stdRoutes from './routes/stdRoute.js';
dotenv.config();
// const port=process.env.port;
const PORT = process.env.PORT || 9999;

const app=express();
app.use(express.json());
app.use(cors());
dbConnect();

app.use('/api/auth/',userRoutes)
app.use('/api/std/',stdRoutes)


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});