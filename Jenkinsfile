node('slave') {
    stage ('checkout'){
        echo "checkout2"
        sleep time: 10, unit: 'SECONDS'  
    }
    stage ('build'){
        echo "build"
        cd ownui
        npm run install
        npm run build
    }
    stage ('deploy'){
        echo "deploy"
    }
    stage ('test'){
        echo "test"
    }
}