import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string[];
  rating: number;
  isFavorite: boolean;
}

const productSchema: Schema<IProduct> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: [String], required: true },
  rating: { type: Number, required: true },
  isFavorite: { type: Boolean, default: false },
});

export const Product = mongoose.model<IProduct>("Products", productSchema);
