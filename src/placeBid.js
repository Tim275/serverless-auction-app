import AWS from 'aws-sdk';
import createError from 'http-errors';



const dynamodb = new AWS.DynamoDB.DocumentClient();




async function placeBid(event, context) {

// neue funktion zur bugbewältigung




  const { id } = event.pathParameters;
  const { amount } = JSON.parse(event.body); // parse amount


  // First, create highestBid if it does not exist
  let params = {
    TableName: 'AuctionsTable', // replace with your table name
    Key: { id },
    UpdateExpression: 'set highestBid = if_not_exists(highestBid, :initialBid)',
    ExpressionAttributeValues: {
      ':initialBid': { amount: 0 }, // initial value for highestBid
    },
    ReturnValues: 'ALL_NEW',
  };

  try {
    await dynamodb.update(params).promise();
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  // Then, update highestBid.amount
  params = {
    TableName: 'AuctionsTable', // replace with your table name
    Key: { id },
    UpdateExpression: 'set highestBid.amount = :amount',
    ExpressionAttributeValues: {
      ':amount': amount,
    },
    ReturnValues: 'ALL_NEW',
  };

  let updatedAuction;

  try {
    const result = await dynamodb.update(params).promise();
    updatedAuction = result.Attributes;
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(updatedAuction),
  };
}

export const handler = placeBid;