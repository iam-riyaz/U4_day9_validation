const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.models");

const router = express.Router();

router.post(
  "/",
  
  body("first_name")
    .not()
    .isEmpty()
    .withMessage("First Name cannot be empty"),
    
  body("last_name")
  .not()
    .isEmpty()
    .withMessage("last Name cannot be empty"),
    
    
  body("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("try with a valid Email"),

    body("pincode")
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({max:6},{min:6})
    .withMessage("pincode should be exactly 6 numbers"),
    
    body("age")
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("invalid number")
    .isInt({ min: 1, max: 100 })
    .withMessage("age should between 1 to 100"),
    
    


    body("gender")
    .not()
    .isEmpty()
    .custom( async(value)=>{
      if(value!=="Male" && value!=="Female" && value!=="Others" ){
         throw new Error("Enter 'Male' or 'Female' or 'Others'")
      }
           return true
    }),
  
 
  async (req, res) => {
    try {
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports = router;

