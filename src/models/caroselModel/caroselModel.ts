import mongoose, { Schema, Document } from "mongoose";

interface ICarosels extends Document {
  index: number;
  url: string;
}

const carouselSchema: Schema<ICarosels> = new Schema({
  index: { type: Number },
  url: { type: String, required: true },
});

export const Carousel = mongoose.model<ICarosels>("Cart", carouselSchema);

export default Carousel;
