const Sender = async (img, desc, river, rapid) => {
  const URL = {
    local: "http://localhost:9000/sendMail",
    remote: "/.netlify/functions/sendMail",
  };

  //Set URL.local when working in local server. URL.remote before push to remote build.

  const response = await fetch(URL.remote, {
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
