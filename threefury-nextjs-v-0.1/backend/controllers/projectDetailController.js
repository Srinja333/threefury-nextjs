const projectDetailsModel = require("../models/projectDetails");

const saveProjectDetails=async(req, res)=>{
  try {
    const response = await projectDetailsModel.create({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_contact: req.body.user_contact,
      user_address: req.body.user_address,
      user_type: req.body.user_type,
      user_company: req.body.user_company,
      user_explaination: req.body.user_explaination,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
}

module.exports=saveProjectDetails