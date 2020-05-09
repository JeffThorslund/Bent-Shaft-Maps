"use strict";
const nodemailer = require("nodemailer");

exports.handler = function (event, context, callback) {
  const { text } = JSON.parse(event.body);

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
      subject: `Ottawa`, // Subject line
      text: "ok", // plain text body
      html: `<div>PLS work</div>`, // html body
      attachments: [
        {
          path: text,
        },
      ],
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);

  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content_Type, Accept",
    },
    body: "hi",
  });
};
