var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Users";

var params = {
    TableName:table,
    Item:{
        "email": "dhruv@thinschool.org",
        "firstname": "Dhruv",
        "lastname": "Jain"
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
