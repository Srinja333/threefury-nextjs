const projectDetailsModel = require("../models/projectDetails");

const saveProjectDetails=async(req, res)=>{
  try {
    const response = await projectDetailsModel.create({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_contact: req.body.user_contact,
      user_details: req.body.user_details,
      user_explaination: req.body.user_explaination,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
}

module.exports=saveProjectDetails