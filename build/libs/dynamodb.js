'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = require('@awspilot/dynamodb')({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION
});