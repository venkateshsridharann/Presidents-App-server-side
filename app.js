import express from 'express';
import bodyParser from 'body-parser';
import db from './db/db';
import router from './routes/presroutes.js';
import cors from 'cors';

const app = express();
app.use(cors());
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
