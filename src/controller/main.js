const newsLetter = require("../model/newsLetter");
const contact = require("../model/contactUs");
const {sendEmail, sendWelcomeEmail} = require("../utils/email");


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


        var sendMailData = {
          "file_template": './public/EmailTemplates/newsLetter.html',
          "from": email,
        }
  
        sendEmail(sendMailData).then((val) => {
            return res.status(200).send({ 'status': true, 'code': 200, 'message': "Please check your email.", 'data': val })
        }).catch((err) => {
            console.log(err);
            return res.status(401).send({ "status": false, 'code': 200, "message": "Unable to send email!", data: {} })
        })


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


        var sendMailData = {
          "file_template": './public/EmailTemplates/welcome.html',
          // "to": email ? email : null,
          "username": `${ name }`,
          "from": email,
          "message": message
        }
  
      sendEmail(sendMailData).then((val) => {
          return res.status(200).send({ 'status': true, 'code': 200, 'message': "Please check your email.", 'data': val })
      }).catch((err) => {
          console.log(err);
          return res.status(401).send({ "status": false, 'code': 200, "message": "Unable to send email!", data: {} })
      })
  
  
      // without tempalte 
      // send welcome email
              // var subject1 = "Welcome to Ecoforest"
              // var html1 = "<h2>Hello , <br>Congratulations! You have successfully signed up for Ecoforest  </br> We are super excited to welcome you to our Ecoforest Community.</br> Now you are all set to buy our WIZZ NFT Smart Node to start earning passive income.</br> Thank You,</br> Team Wizz"
  
              // var mail = await sendWelcomeEmail(email, subject1, html1)
  
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
