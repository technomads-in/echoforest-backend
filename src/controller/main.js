const newsLetter = require("../model/newsLetter");
const contact = require("../model/contactUs");

const newsletter = async(req,res) => {
    try{
        const {  email } = req.body;
        if(!email){
            return res.status(400).send({ status: false, message: "Email is required" });
          }
        
        const user = await new newsLetter({
          email,
        }).save();
        if (!user) {
          return res.status(400).send({ status: false, message: "Data not found" });
        }
        return res.status(200).send({ status: true, data: user });
    }catch(e)
    {
        console.log(e);
        res.status(500).json({
            status: false, message: "Data not found", data:{}
        });
    }
}

const contactUs = async(req, res) => {
    try{
        const { name, email, message } = req.body;

        if(!email || !name || !message) {
          return res.status(400).send({ status: false, message: "Email is required" });
        }
        const user = await new contact({
          name,
          email,
          message
        }).save();
        if (!user) {
          return res.status(400).send({ status: false, message: "Data not found" });
        }

        return res.status(200).send({ status: true, data: user });
    }catch(e) {
        console.log(e);
        res.status(500).json({
            status: false, message: "Data not found", data:{ }
        });
    }
}


module.exports = {
    newsletter,
    contactUs
};
