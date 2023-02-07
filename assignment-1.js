

/* 
This function is too calculate a number in given mathematical expression and return the output.
*/


function mindGame(number) {

    if( typeof number == "number") {
        let result = ((((number * 3) + 10) / 2) -5);
        return result;
    }
    else{
        return "Enter a number";
    }
}

console.log(mindGame(5));