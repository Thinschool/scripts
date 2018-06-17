// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create the DynamoDB service object
var docClient = new AWS.DynamoDB.DocumentClient();

var table = "users";

var params = {
  TableName: table,
  Key: {
    'user_id' : 1,
  }
};

// Call DynamoDB to read the item from the table
docClient.delete(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});

