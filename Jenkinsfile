pipeline {
    agent any

    tools { nodejs 'NodeJS-20' }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }

        stage('Install') {
            steps { sh 'npm ci' }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint || echo "No lint"'
            }
        }

        stage('Test') {
            steps { sh 'npm test' }
        }

        stage('Report') {
            steps {
                echo "✅ CI passed"
            }
        }
    }

    post {
        always  { echo 'Pipeline complete' }
        success { echo 'All green!' }
        failure { echo 'Build failed — check logs' }
    }
}
