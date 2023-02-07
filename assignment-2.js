
/* 
Q-2.
This function takes a input as string and check length of the string is even or odd. If length is even output as string "even", else return output as string "odd".
*/


function evenOdd(string) {
    if( typeof string == "string") {

        let length = string.length;
    
        if( length % 2 == 0) {
        return "even";
        }
        else{
        return "odd";
        }
    }
    else{
        return "Enter a string!"
    }
}

console.log(evenOdd(9));