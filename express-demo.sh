#!/bin/bash
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install -y nodejs
npm i express
npm i -g nodemon
zip -r express-demo.zip *
aws s3 cp express-demo.zip s3://bucketName
