import { Request, Response } from "express";
import { Product } from "../../models/productModel/productModal";
export async function getProducts(req: Request, res: Response) {
  try {
    const { page = 1, limit = 10, category = "" } = req.query;
    const products = await Product.find({
      ...(category ? { category: { $regex: category, $options: "i" } } : {}),
    })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / Number(limit));

    res.status(200).json({
      products: products,
      totalProducts: totalProducts,
      totalPages: totalPages,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
}

export async function addProduct(req: Request, res: Response) {
  try {
    const { name, description, price, category, imageUrl, rating } =
      await req.body;
    const product = await Product.create({
      name,
      description,
      price,
      category,
      imageUrl,
      rating,
    });

    res.status(201).json({
      message: "Product added successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const id = req.params.productId;

    const product = await Product.deleteOne({ _id: id });

    res.status(201).json({
      message: "Product deleted successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
}

export async function getBestSell(req: Request, res: Response) {
  try {
    const products = await Product.find({}).sort({ rating: -1 }).limit(4);
    const totalProducts = products.length;

    res.status(200).json({
      products: products,
      totalProducts: totalProducts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
}
