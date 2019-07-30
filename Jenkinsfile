pipeline {
    agent any
    stages {
        stage('Build & Test') {
            parallel {
                stage('Backend Build & Test') {
                    steps {
                        dir('backend') {
                            script {
                                docker.image('node:8.16.0-alpine').inside {
                                    sh 'yarn global add gulp-cli'
                                    sh 'yarn install'
                                    sh 'gulp'
                                    sh 'gulp test'
                                }
                            }
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            when { buildingTag() }
            parallel {
                stage('Backend Build and Push') {
                    steps {
                        dir('backend') {
                            script {
                                docker.withRegistry("https://hub.cjblink1.pro", "registryCredentials") {
                                    def backendImage = docker.build("commute-backend:${TAG_NAME}")
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