import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import router from './router';

mongoose.connect("mongodb://localhost:27017/mern-market", { useUnifiedTopology: true, useNewUrlParser: true });

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3001);


