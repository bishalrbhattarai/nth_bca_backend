import Record from "../models/record.model.js";

const submitForm = async (req, res) => {
  try {
    const [profilePic] = req.files.profilePic;
    const [pdfFile] = req.files.pdfFile;

    console.log(req.files);
    console.log(profilePic);
    console.log(pdfFile);

    const record = new Record({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      profilePic: profilePic.filename,
      pdfFile: pdfFile.filename,
    });

    await record.save();
    console.log("record saved");

    res.json({
      success: true,
      severity: "success",
      message: "Submitted SuccessFully!!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      severity: "error",
      message: "Something went wrong!!",
    });
  }
};

const allRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).json({
      success: true,
      records,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      severity: "error",
      message: "Something went wrong!!",
    });
  }
};

export { submitForm, allRecords };
