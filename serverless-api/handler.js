'use strict';

module.exports.hello = async (event) => {
  // Buscamos si enviaron ?name=Alguien, si no, usamos "Mundo"
  const name = event.queryStringParameters && event.queryStringParameters.name 
               ? event.queryStringParameters.name 
               : 'Mundo';

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${name} desde Serverless Framework`,
      },
      null,
      2
    ),
  };
};