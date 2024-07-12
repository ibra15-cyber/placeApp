import mongoose, { Mongoose } from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    location: {
      lat: { type: Number },
      lng: { type: Number },
    },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    category: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const Place = mongoose.model("Place", placeSchema);

export default Place;
