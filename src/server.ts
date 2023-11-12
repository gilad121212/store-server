import express from 'express';


const app = express();

// app.use(cors());
app.use(express.json());



app.listen(3000, () => {
  console.log(`Server is up and running`);
});
