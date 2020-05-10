const Sender = async (img, desc, river, rapid) => {
  console.log("started...");
  const response = await fetch("/.netlify/functions/sendMail", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/javascript",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },

    body: JSON.stringify({
      img: img,
      desc: desc,
      river: river,
      rapid: rapid,
    }),
  });

  //console.log("Sender.js", text, river, rapid);

  return response;
};

export default Sender;
