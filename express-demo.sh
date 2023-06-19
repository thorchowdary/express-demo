#!/bin/bash
npm i express
npm i -g nodemon
zip -r express-demo.zip *
aws s3 cp express-demo.zip s3://bucketName
