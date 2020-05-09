const Sender = async (text, river, rapid) => {
  console.log("started...");
  const response = await fetch("http://localhost:9000/sendMail", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/javascript",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },

    body: JSON.stringify({
      text: text,
      river: river,
      rapid: rapid,
    }),
  });

  //console.log("Sender.js", text, river, rapid);

  return response;
};

export default Sender;
