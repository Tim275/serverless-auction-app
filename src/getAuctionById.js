import AWS from 'aws-sdk';
import createError from 'http-errors';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getAuctions(event, context) {
    let auction;

    try {
        const result = await dynamodb.get({
            TableName: 'AuctionsTable', // replace with your table name
            Key: { id: event.pathParameters.id }, // replace 'id' with your key name
        }).promise();

        auction = result.Item;
    } catch (error) {
        console.error(error);
        throw new createError.InternalServerError(error);
    }

    if(!auction) {
     throw new createError.NotFound(`Auction with ID "${event.pathParameters.id}" not found!.`);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(auction),
    };
}

export const handler = getAuctions;