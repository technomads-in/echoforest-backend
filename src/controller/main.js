const newsLetter = require("../model/newsLetter");
const contact = require("../model/contactUs");

const newsletter = async(req,res) => {
    try{
        const {  email } = req.body;

        const user = await new newsLetter({
          email,
        }).save();
        if(!email){
            return res.status(400).send({ status: false, message: "Email is required" });
          }
        if (!user) {
          return res.status(400).send({ status: false, message: "Data not found" });
        }
        return res.status(200).send({ status: true, data: user });
    }catch(e)
    {
        console.log(e);
        res.status(500).json({
            error: e
        });
    }
}

const contactUs = async(req, res) => {
    try{
        const { name, email, message } = req.body;

        const user = await new contact({
          name,
          email,
          message
        }).save();
        if (!user) {
          return res.status(400).send({ status: false, message: "Data not found" });
        }
        if(!email){
          return res.status(400).send({ status: false, message: "Email is required" });
        }

        return res.status(200).send({ status: true, data: user });
    }catch(e) {
        console.log(e);
        res.status(500).json({
            error: e
        });
    }
}


module.exports = {
    newsletter,
    contactUs
};
