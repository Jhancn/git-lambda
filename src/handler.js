'use strict';

module.exports.home = async (event) => {
  // Logic for another endpoint
  // Handle the request for the 'another-endpoint' path here
  // Example response:
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    body: "Welcome to  generateRandomNumber home page!!!!",
  };
};

module.exports.generateRandomNumber = async (event) => {
  const randomNumber = parseInt(Math.random()*100);
  console.log("Random generated Number is",randomNumber);
  
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number: randomNumber }),};
 };

 module.exports.owner = async (event) => {
  // Logic for another endpoint
  // Handle the request for the 'another-endpoint' path here
  // Example response:
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    body: "Jhansi",
  };
};
