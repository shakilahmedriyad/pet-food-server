import { Request, Response } from "express";
import Cart from "../../models/cartModel/cartModel";

export async function addToCart(req: Request, res: Response) {
  try {
    const { productId, quantity } = req.body;
    const userId = req.params.userId;

    const cart = await Cart.updateOne(
      { userId: userId },
      {
        $addToSet: {
          products: {
            productId: productId,
            quantity: quantity,
          },
        },
      },
      { upsert: true }
    );
    if (cart.modifiedCount > 0) {
      res.status(200).json({
        message: "Product added to cart successfully",
        cart: cart,
      });
    }
    if (cart.matchedCount > 0) {
      res.status(200).json({
        message: "Product already exists in cart",
        cart: cart,
      });
    }
    if (cart.upsertedCount > 0) {
      res.status(201).json({
        message: "Cart created and product added successfully",
        cart: cart,
      });
    }
    if (cart.matchedCount === 0 && cart.upsertedCount === 0) {
      res.status(404).json({
        message: "Product not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
}
export async function getCart(req: Request, res: Response) {}
export async function removeFromCart(req: Request, res: Response) {}
export async function clearCart(req: Request, res: Response) {}
