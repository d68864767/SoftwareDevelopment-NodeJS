```javascript
// ec2Instances.test.js

// This file is for testing the management of EC2 instances in AWS using Node.js.
// We will be using the AWS SDK for JavaScript in Node.js and Jest for testing.

const AWS = require('aws-sdk');
const ec2Instances = require('./ec2Instances');

// Mock AWS SDK
jest.mock('aws-sdk', () => {
  const AWSMock = {
    EC2: jest.fn(() => ({
      runInstances: jest.fn(),
      describeInstances: jest.fn(),
    })),
    config: {
      update: jest.fn(),
    },
  };
  return AWSMock;
});

const runInstancesMock = AWS.EC2().runInstances;
const describeInstancesMock = AWS.EC2().describeInstances;

describe('EC2 Instances', () => {
  beforeEach(() => {
    runInstancesMock.mockReset();
    describeInstancesMock.mockReset();
  });

  it('should create an instance', () => {
    runInstancesMock.mockImplementation((params, callback) => {
      callback(null, { Instances: [{ InstanceId: 'test-instance-id' }] });
    });

    ec2Instances.createInstance((err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('test-instance-id');
    });
  });

  it('should handle errors when creating an instance', () => {
    runInstancesMock.mockImplementation((params, callback) => {
      callback(new Error('Could not create instance'), null);
    });

    ec2Instances.createInstance((err, data) => {
      expect(err).toEqual(new Error('Could not create instance'));
      expect(data).toBeUndefined();
    });
  });

  it('should describe an instance', () => {
    describeInstancesMock.mockImplementation((params, callback) => {
      callback(null, { Reservations: [{ Instances: [{ InstanceId: 'test-instance-id' }] }] });
    });

    ec2Instances.describeInstance('test-instance-id', (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('test-instance-id');
    });
  });

  it('should handle errors when describing an instance', () => {
    describeInstancesMock.mockImplementation((params, callback) => {
      callback(new Error('Error describing instance'), null);
    });

    ec2Instances.describeInstance('test-instance-id', (err, data) => {
      expect(err).toEqual(new Error('Error describing instance'));
      expect(data).toBeUndefined();
    });
  });
});
```
