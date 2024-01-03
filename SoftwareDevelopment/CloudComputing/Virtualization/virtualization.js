```javascript
// virtualization.js

// This file is for demonstrating the concept of virtualization in cloud computing using Node.js.
// We will be using the AWS SDK for JavaScript in Node.js.

const AWS = require('aws-sdk');

// Set the region 
AWS.config.update({region: 'us-west-2'});

// Create EC2 service object
let ec2 = new AWS.EC2({apiVersion: 'latest'});

// Parameters for the EC2 instance
let instanceParams = {
   ImageId: 'ami-0abcdef1234567890', 
   InstanceType: 't2.micro',
   KeyName: 'KEY_PAIR_NAME',
   MinCount: 1,
   MaxCount: 1
};

// Create the instance
ec2.runInstances(instanceParams, function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Success", data.Instances);
   }
});

// Describe instances
let params = {
   InstanceIds: ['INSTANCE_ID'],
   DryRun: false
};

ec2.describeInstances(params, function(err, data) {
   if (err) {
      console.error("Error", err);
   } else {
      console.log("Success", JSON.stringify(data.Reservations));
   }
});
```
