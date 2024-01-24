pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                git branch: 'main', credentialsId: 'gitHubSSH', url: 'git@github.com:dienesh12/node-ci-cd.git'
            }
        }
        
        stage('build') {
            steps {
                echo "building docker image"
                sh """
                    docker build -t node-cicd .
                """
            }
        }
        
        stage('push') {
            steps {
                echo "push to dockerhub"
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPass', usernameVariable: 'dockerHubUser')]) {
                    echo "tagging the image"
                    sh "docker tag node-cicd ${env.dockerHubUser}/node-cicd:latest"
                    
                    echo "login to dockerhub"
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                    
                    echo "push to dockerhub"
                    sh "docker push ${env.dockerHubUser}/node-cicd"
                }
            }
        }
        
        stage('deploy') {
            steps {
                echo "running the image"
                sh """
                    docker-compose down && docker-compose up -d
                """
            }
        }
    }
}
