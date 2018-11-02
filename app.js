import express from 'express';
import bodyParser from 'body-parser';
import db from './db/db';
import router from './routes/presroutes.js';

const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
