import express, { Request, Response } from "express";
import productsRouter from "../products/routes/router";
import usersRouter from "../users/routes/router";
const router = express.Router();


router.use('/products',productsRouter)
router.use('/users',usersRouter)
router.use(express.static("../../public"));

router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Page is not found")
);

export default router;