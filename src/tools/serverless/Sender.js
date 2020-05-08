const Sender = async () => {
  console.log("started...");
  const response = await fetch("http://localhost:9000/sendMail", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //redirect: "follow", // manual, *follow, error
    //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      title: "my third post",
      description: "description of my love life",
    }), // body data type must match "Content-Type" header
  });

  return response;
};

export default Sender;
