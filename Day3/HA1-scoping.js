var genderType="Female"
function printGender(){
    let color="brown"
     
    if (genderType=="Female") {
      
        var age=30
        let color="pink"
        console.log("Color value declared inside the block",color) 
        console.log("Gendertype inside the block",genderType)      
    }
    console.log("Age(var) value declared inside the block but printed inside function",age)
    console.log("Color value printed outside the block",color)
}
printGender()
console.log("Gendertype is globally declared as",genderType)