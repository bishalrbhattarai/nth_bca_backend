import mongoose from "mongoose";
const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is empty"],
    },
    password: {
      type: String,
      required: [true, "password is empty"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("admins", adminSchema);
