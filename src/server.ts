import express from 'express';
import productsRouter from './products/routes/router';
import { usersRouter } from './users/routes/router';
import { client } from './configuration/mongoDB';

const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.json());
app.use('/products',productsRouter)
app.use('/users',usersRouter)

app.listen(3000, async () => {
  await client.connect();
  console.log(`Server is up and running`);
});


