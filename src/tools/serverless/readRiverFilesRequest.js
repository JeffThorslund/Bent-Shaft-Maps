const readRiverFilesRequest = async (path) => {
  //Set URL.local when working in local server. URL.remote before push to remote build.

  const URL = {
    local: "http://localhost:9000/readRiverFiles",
    remote: "/.netlify/functions/readRiverFiles",
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  var raw = JSON.stringify({ "path": "./src/river-data" });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  var rtn = null;

  return fetch(URL.local, requestOptions);
};

export default readRiverFilesRequest;
