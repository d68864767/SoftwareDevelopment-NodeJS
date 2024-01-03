```javascript
// ec2Instances.js

// This file is for demonstrating the management of EC2 instances in AWS using Node.js.
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
      console.log("Could not create instance", err);
      return;
   }
   let instanceId = data.Instances[0].InstanceId;
   console.log("Created instance", instanceId);
});

// Parameters to describe the instance
let instanceIdParams = {
   InstanceIds: ['INSTANCE_ID']
};

// Call EC2 to retrieve policy for selected bucket
ec2.describeInstances(instanceIdParams, function(err, data) {
   if (err) {
      console.log("Error", err.stack);
   } else {
      console.log("Success", JSON.stringify(data, null, 2));
   }
});
```
