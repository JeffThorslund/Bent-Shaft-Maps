"use strict";
const nodemailer = require("nodemailer");

exports.handler = function (event, context, callback) {
  let { title } = JSON.parse(event.body);

  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "wetexittest@zohomail.com",
        pass: "pullout123",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "wetexittest@zohomail.com", // sender address
      to: "jeffrey.thorslund@gmail.com", // list of receivers
      subject: "Successful Send", // Subject line
      text: "Successful Send baby!!!?", // plain text body
      html: `<div>${title}</div>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }

  console.log(event);

  main().catch(console.error);

  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-Width, Content_Type, Accept",
    },
    body: "Success!",
  });
};
