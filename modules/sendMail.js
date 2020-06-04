"use strict";
const nodemailer = require("nodemailer");

module.exports = function (img, desc, river, rapid) {

  const {
    DESTINATION_EMAIL,
    SOURCE_EMAIL,
    SOURCE_HOST,
    SOURCE_PASS,
    SOURCE_PORT,
  } = process.env;

  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: SOURCE_HOST,
      port: SOURCE_PORT,
      secure: true,
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
};
