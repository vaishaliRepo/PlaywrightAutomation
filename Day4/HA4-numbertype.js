
function numberType(num) {

    if (num > 0) {
        console.log(num + " " + "is a positive number")
    }
    else if (num < 0) {
        console.log(num + " " + "is a Negative number")
    }
    else if(num === 0)
    {
        console.log(num + " " + "is a Neutral number")
    } 
}

numberType(-5)
numberType(15)
numberType(0)