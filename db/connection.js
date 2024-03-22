import mongoose from "mongoose";
const connectToDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yxggf1x.mongodb.net/nth_bca?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("connection established to mongoDB");
  } catch (err) {
    console.log(err);
    console.log("could not connect to DB");
  }
};

export default connectToDB;
