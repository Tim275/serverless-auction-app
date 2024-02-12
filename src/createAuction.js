// src/createAuction.js
const AWS = require('aws-sdk');
const { v4: uuid } = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createAuction(event, context) {


  const { title } = JSON.parse(event.body);
  const now = new Date();

  const auction = {
    id: uuid(),
    title,
    status: 'OPEN',
    createdAt: now.toISOString(),
  };

  await dynamodb.put({
    TableName: 'AuctionsTable',
    Item: auction,
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}



exports.handler = createAuction;