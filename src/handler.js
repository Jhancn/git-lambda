'use strict';

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
