import mongoose from "mongoose";
const recordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name should not be empty"],
    },
    phoneNumber: {
      type: String,
      maxLength: 10,
      minLength: 10,
      required: [true, "Phone number should not be empty"],
    },
    pdfFile: {
      type: String,
      required: [true, "PDF should not be empty"],
    },
    profilePic: {
      type: String,
      required: [true, "Profile Picture should not be empty"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("records", recordSchema);
