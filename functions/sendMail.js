"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();

exports.handler = function (event, context, callback) {
  const { img, desc, river, rapid } = JSON.parse(event.body);
  const {
    DESTINATION_EMAIL,
    SOURCE_EMAIL,
    SOURCE_HOST,
    SOURCE_PASS,
    SOURCE_PORT,
  } = process.env; //deconstructing environment variables from Netlify.

  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: SOURCE_HOST,
      port: SOURCE_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: SOURCE_EMAIL,
        pass: SOURCE_PASS,
      },
    });

    //only attach attachment if there is one.
    let attachments = [];
    if (img) {
      attachments = [{ path: img }];
    }

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: SOURCE_EMAIL, // sender address
      to: DESTINATION_EMAIL, // list of receivers
      subject: `${river} - ${rapid}`, // Subject line
      text: "ok", // plain text body
      html: `<div>${desc}</div>`, // html body
      attachments: attachments,
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
    body: "sendMail.js sucessfully executed",
  });
};
