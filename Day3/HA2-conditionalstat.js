function launchBrowser(){
    let browserName="Chrome"
    if (browserName=="Chrome") {
        console.log("Browser name is" ,browserName)
        
    } else {
        console.log("Browser name is others")
    }

}

function runTests(){
    let testType="Integration"
    switch (testType) {
        case "functional":
            console.log("Functional test is in progress")            
            break;
            case "sanity":
            console.log("sanity test is in progress")   
            break;
            case "regression":
            console.log("Regression test is in progress")   
            break;
            
        default:
 console.log("Smoke test is in progress")   
            break;
    }

}
launchBrowser()
runTests()