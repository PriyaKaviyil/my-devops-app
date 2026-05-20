pipeline {
    agent any
    tools { nodejs 'NodeJS-20' }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }

        // Parallel lint + test (= GHA parallel jobs)
        stage('Quality') {
            parallel {
                stage('Lint') {
                    steps {
                        sh 'npm ci'
                        sh 'npm run lint || echo "No lint"'
                    }
                }
                stage('Test') {
                    steps {
                        sh 'npm ci && npm test'
                    }
                }
            }
        }

        stage('Build') {
            when {
        expression {
            env.GIT_BRANCH?.contains('main')
        }
    }

            steps {
                withCredentials([
                    string(credentialsId: 'app-version',
                           variable: 'APP_VERSION')
                ]) {
                    sh """
                        echo "Building $APP_VERSION"
                        npm ci
                    """
                }
            }
        }
    }

    post {
        success { echo '✅ Build passed!' }
        failure { echo '❌ Build failed!' }
        always  { cleanWs() }
    }
}