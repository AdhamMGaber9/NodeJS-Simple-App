pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'simple-app'
        DOCKER_IMAGE_TAG = 'latest'
        DOCKER_REPO='adhammgaber'
    }

    stages {
        stage('Checkout') {
               steps {
                git (url:'https://github.com/AdhamMGaber9/NodeJS-Simple-App.git', branch:'main')
            }
        }
        stage ('build'){
            steps {
                script {
                    def dockerImage = docker.build("${DOCKER_REPO}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}", ".")
                    // sh 'docker images'
                }
            }
        }    
        stage('Push Docker image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        def dockerImage = docker.image("${DOCKER_REPO}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                        dockerImage.push()
                    }
                }
            }
        }
        
        stage ('Deploy the pod'){
            steps{
                sh 'kubectl apply -f /pod/pod-deploy.yaml'
                sh 'kubectl apply -f /pod/pod-svc.yaml'
                
                sh 'kubectl get all'
            }
        }
    }
}
