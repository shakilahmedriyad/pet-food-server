import mongoose, { Schema, Document } from "mongoose";

interface ICarts extends Document {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
}

const cartSchema: Schema<ICarts> = new Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: String, required: true, ref: "Products" },
      quantity: { type: Number, required: true },
    },
  ],
});

export const Cart = mongoose.model<ICarts>("Cart", cartSchema);
export default Cart;
