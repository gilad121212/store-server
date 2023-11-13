import express from 'express';
import { client } from './configuration/mongoDB';
const app = express();

// app.use(cors());
app.use(express.json());




app.listen(3000, async () => {
  await client.connect();
  console.log(`Server is up and running`);
});


