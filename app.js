const express = require("express");
const Joi = require("joi");
//const bodyParser = require("body-parser");
const app = express();
//app.use(bodyParser.json());
app.use(express.json())
app.post("/del", async (req, res) => {
  try {
    console.log(req.body);
    const schema =await Joi.object({
      firstName: Joi.string().min(3).max(10).required(),
      sureName: Joi.string().min(3).max(10).required(),
      gender: Joi.string().valid("m", "f").required(),
      email: Joi.string().email().required(),
    });

    let { error } =await schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
     
    } else {
      res.status(200).json({ message: "Data sent" });
    }
  } catch (error) {
    console.log(error);
  }
  
});
app.get("/all",(req,res)=>{
  res.send("I got it")
})
app.listen(1513, () => {
  console.log("Listening to port 1513");
});
