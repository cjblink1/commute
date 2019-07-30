pipeline {
    agent any
    stages {
        stage('Backend') {
            parallel {
                stage('Backend Build and Push') {
                    steps {
                        dir('backend') {
                            script {
                                docker.withRegistry("https://hub.cjblink1.pro", "registryCredentials") {
                                    def backendImage = docker.build("commute-backend:${GIT_COMMIT}")
                                    backendImage.push()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}