import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const dynamodb = new DynamoDBClient();

async function getAuctions(event, context) {
    let auctions;
    try {
        const params = {
            TableName: 'AuctionsTable'
        };
        const command = new ScanCommand(params);
        const result = await dynamodb.send(command);

        auctions = result.Items.map(item => {
            
            const unmarshalledItem = unmarshall(item);

           
            const { id, title, status, createdAt } = unmarshalledItem;

            return { id, title, status, createdAt };
        });
    } catch (error) {
        console.error(error);
        throw new Error(`Internal server error: ${error}`);
    }
    return {
        statusCode: 200,
        body: JSON.stringify(auctions)
    };
}

export { getAuctions as handler };
