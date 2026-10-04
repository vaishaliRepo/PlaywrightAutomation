/* Classroom Activity 2:

Write JS code to reverse the string (Testleaf) */

let companyName="Testleaf"
let reverseString=""

for(let i=companyName.length-1;i>=0;i--){
    reverseString=reverseString+companyName.charAt(i)
}
console.log("Original String" + " " +"'"+ companyName +"'")
  console.log("Reversed String" + " " +"'"+ reverseString +"'")



