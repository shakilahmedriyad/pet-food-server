import { Request, Response } from "express";
import Carosel from "../../models/caroselModel/caroselModel";

export async function getCarousel(req: Request, res: Response) {
  try {
    const carosel = await Carosel.find();
    const carouselCount = carosel.length;
    res.status(200).json({
      carosel: carosel,
      carouselCount: carouselCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
}

export async function addCarousel(req: Request, res: Response) {
  try {
    const { url } = await req.body;
    const carosel = await Carosel.create({ url: url });
    res.status(200).json({
      carosel: carosel,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
}
