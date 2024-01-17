import express from 'express';
import cors from 'cors';
import nocache from 'nocache';
import { dbConnection } from './config/database.connection';

const app = express();
const port =  process.env.PORT || 3000;
app.use(cors());

app.use(nocache());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnection();
// app.use('/user/',authRoute);
app.listen(port, () => {
    console.log(`Server Running on ${port}`);
  });