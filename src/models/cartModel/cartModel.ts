import mongoose, { Schema, Document } from "mongoose";

interface ICart extends Document {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
}

const cartSchema: Schema<ICart> = new Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: String, required: true, ref: "Products" },
      quantity: { type: Number, required: true },
    },
  ],
});

export const Cart = mongoose.model<ICart>("Cart", cartSchema);
export default Cart;
