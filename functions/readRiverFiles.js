var fs = require("fs");

exports.handler = function (event, context, callback) {
  if (event.httpMethod === 'OPTIONS') {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      },
      body: JSON.stringify({message: 'You can use CORS'}),
    }
    callback(null, response)
    return
  }

  const { path } = JSON.parse(event.body);
  let files = fs.readdirSync(path);

  let rivers = [];

  files.forEach((elem) => {
    let data = fs.readFileSync(`${path}/${elem}/temp_data.json`, "utf8");
    console.log(data);
    rivers.push(data);
  });

  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  };


  callback(null, {
    headers,
    statusCode: 200,
    body: JSON.stringify({ "rivers": rivers })
  });
};
