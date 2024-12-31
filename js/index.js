// Prevent us from attempting to use variables
// that are not declared
"use strict"

let i = 0;
while (i < 5) { //loops while 1 < 5
    console.log(i); //Outputs 0 - 4
    i++; //adds 1 to i each time
}
 
let x = 0; 
do {  //does this as long as the while is true
    console.log(x);  //outputs 0 - 4
    x++;  //adds 1 to x each time
} while (x < 5); //loop continues while this is true, 
//loop ends once i = 5

i = 0;
while (1 < 5) {
    console.log ("Hello"); //Me checking to see when we enter this loop
    console.log(i);
    i++;
      if (i === 4){
        break; //breaks when i = 4
    }
}//Outputs Hello 1 - Hello 3

i = 10;
x = 0;
while (i < 20) {
  i++;
  console.log("Diane");//Showing me that we are inside this loop
  if (i === 15) {
    continue;
    
  }
  x += i;
  console.log(x);//Outputs Diane followed by increments starting at 11
  //increasing by 12 then 13 and so on...
  //loop stops when 1 = 20 and n = 140 
}


