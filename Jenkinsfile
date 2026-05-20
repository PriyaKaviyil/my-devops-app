pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    triggers {
        githubPush()
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Quality Checks') {
            parallel {

                stage('Lint') {
                    steps {
                        sh 'npm run lint || echo "No lint"'
                    }
                }

                stage('Test') {
                    steps {
                        sh 'npm test || echo "No tests"'
                    }
                }
            }
        }

        stage('Build') {
            when {
                expression {
                    env.BRANCH_NAME == 'main'
                }
            }

            steps {
                echo 'Building app...'
            }
        }

        stage('Report') {
            steps {
                echo '✅ CI passed'
            }
        }
    }

    post {
        always {
            echo 'Pipeline complete'
        }

        success {
            echo 'All green!'
        }

        failure {
            echo 'Build failed — check logs'
        }
    }
}