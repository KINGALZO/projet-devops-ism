pipeline {
    agent any

    environment {
        // Définition de l'image Docker à construire
        IMAGE_NAME = 'app-devops-test:v1'
    }

    stages {
        stage('1. Récupération du Code') {
            steps {
                // Jenkins télécharge la dernière version depuis ton GitHub
                checkout scm
                echo "Code récupéré avec succès depuis GitHub !"
            }
        }

        stage('2. Build de l'image Docker') {
            steps {
                script {
                    // Jenkins compile l'image localement
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('3. Déploiement sur le Cluster K3s') {
            steps {
                script {
                    // Jenkins exporte et applique les fichiers sur Kubernetes
                    sh "docker save -o app.tar ${IMAGE_NAME}"
                    sh "sudo k3s ctr images import app.tar"
                    sh "rm app.tar"
                    sh "kubectl apply -f deployment.yaml"
                    sh "kubectl apply -f service.yaml"
                    echo "Application déployée et orchestrée sur K3s avec succès !"
                }
            }
        }
    }
}
