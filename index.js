var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
   service: "Gmail",  // sets automatically host, port and connection security settings
   auth: {
       user: "arpit.arora123@gmail.com",
       pass: "xxx@1902"
   }
});

smtpTransport.sendMail({  //email options
   from: "arpit.arora123@gmail.com", // sender address.  Must be the same as authenticated user if using Gmail.
   to: "vishalpatidar00789@gmail.com", // receiver
   subject: "Emailing with nodemailer", // subject
   html: "<h2>Email Example with nodemailer</h2>" // body html/text
}, function(error, response){  //callback
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
   
   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
});