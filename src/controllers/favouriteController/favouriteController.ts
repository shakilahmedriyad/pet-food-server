import { Request, Response } from "express";
export async function addToFavourites(req: Request, res: Response) {
  try {
    const { productId } = req.body;
    const userId = req.params.userId;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
}
