pipeline {
    agent any
    stages {
        parallel {
            stage('Backend Build and Push') {
                steps {
                    dir('backend') {
                        script {
                            def backendImage = docker.build("hub.cjblink1.pro/commute-backend:${GIT_COMMIT}")
                            webAppImage.push()
                        }
                    }
                }
            }
        }
    }
}