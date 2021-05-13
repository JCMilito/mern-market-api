import express, { Request, Response } from "express";

import Product from "./model/Product";

const router = express.Router();

router.get("/product/find", (req: Request, res: Response) => {
  Product.find()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json(error));
});

router.get("/product/find/:_id", (req: Request, res: Response) => {
  Product.findOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json(error));
});

router.post("/product/save", (req: Request, res: Response) => {
  new Product(req.body.product)
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json(error));
});

router.post("/product/update", (req: Request, res: Response) => {
  var product = new Product(req.body.product);
  Product.findOneAndUpdate({ _id: product._id }, product)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json(error));
});

router.post("/product/remove", (req: Request, res: Response) => {
  Product.remove({ _id: req.body._id })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json(error));
});

export default router;
