
const sendMailRequest = async (img, desc, river, rapid) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  var raw = JSON.stringify({
    img: img,
    desc: desc,
    river: river,
    rapid: rapid,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("/api/mailer", requestOptions);
};

export default sendMailRequest;
