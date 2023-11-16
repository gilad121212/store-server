import express from 'express';
import productsRouter from './products/routes/router';
import  usersRouter from './users/routes/router';
import { client } from './configuration/mongoDB';
import {corsOrigin as cors} from './cors/cors';
import router from './router.ts/router';
const app = express();

app.use(cors);
app.use(express.json());
app.use(router);

app.listen(3009, async () => {
  await client.connect();
  console.log(`Server is up and running`);
});


