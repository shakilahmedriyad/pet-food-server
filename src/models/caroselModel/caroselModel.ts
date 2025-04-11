import mongoose, { Schema, Document } from "mongoose";

interface ICarosel extends Document {
  index: number;
  url: string;
}

const carouselSchema: Schema<ICarosel> = new Schema({
  index: { type: Number },
  url: { type: String, required: true },
});

export const Carousel = mongoose.model<ICarosel>("Cart", carouselSchema);

export default Carousel;
