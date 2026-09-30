const browserVersion="Chrome"

function getBrowserVersion(){

    if (browserVersion=="Chrome") {
     var browserVersion='Edge'
        console.log('Browser version inside the block is',browserVersion)
        
    }
    else{
        console.log("Browser version outside the block is ",browserVersion)
    }
}
getBrowserVersion()
console.log("Browser version outside the function",browserVersion)
