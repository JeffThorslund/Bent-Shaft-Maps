const readRiverFilesRequest = async (path) => {
  //Set URL.local when working in local server. URL.remote before push to remote build.

  const URL = {
    local: "http://localhost:9000/readRiverFiles",
    remote: "/.netlify/functions/readRiverFiles",
  };

  const response = await fetch(URL.local, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/javascript",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },

    body: JSON.stringify({
      path: path,
    }),
  });

  return response;
};

export default readRiverFilesRequest;
