pipeline {
    agent any
    stages {
        stage('Deploy pacakage to S3') {
            steps {
                sh 'bash ./express-demo.sh'
            }
        }
        stage('Download package from s3') {
            steps {
                sh 'aws s3 cp s3://dev-backendd *'
                sh 'unzip express-demo${}.zip' 
                sh 'node server.js &'
            }
        }
    }
}
