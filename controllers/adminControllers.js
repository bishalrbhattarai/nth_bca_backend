import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    console.log("here is the code!");
    const admin = await Admin.findOne({ username: req.body.username });
    if (!admin) {
      return res.status(404).json({
        success: false,
        severity: "error",
        message: "Username Not Found!!",
      });
    }
    const result = bcrypt.compare(req.body.password, admin.password);

    if (result) {
      const token = jwt.sign(
        {
          id: admin._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
      delete admin.password;
      return res.status(200).json({
        success: true,
        token,
        username: admin.username,
      });
    } else {
      return res.status(404).json({
        success: false,
        severity: "error",
        message: "Password is not matching!!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { login };
