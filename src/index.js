import express from 'express';
import route from './route';

const app = express();
const port = 80;

app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`server open at ${port}`);
});
