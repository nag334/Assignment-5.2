// object declaration for name, age, date of birth and place of birth  
var details ={name:"Nagaraju Kukudala", age:25 , dateOfBirth:"20 Feb 1991",placeOfBirth:"Telangana"} ;


myDetails();// Calling myDetails function
// function for Console.log
function myDetails(){
console.log("Name :" + details.name);  // prints Name on Console
console.log("Age :" + details.age);     // prints Name on Console
console.log("Date Of Birth :" + details.dateOfBirth);   // prints date of birth on Console
console.log("Place Of Birth :" + details["placeOfBirth"]);  // prints place of birth on Console
    
    /* Console.log functions for printing name, 
    age, date of birth and place of birth*/
 }
