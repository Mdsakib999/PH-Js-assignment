

/* 
isLGSeven() function takes a number as input.Then compare the input value with 7. If the result of comparision is less than 7 then return it, otherwise return the double of input value.
*/

function isLGSeven(number) {
    if(typeof number == "number") {

        let result = number - 7;
        if(result < 7) {
            return result;
        }
        else{
            return number * 2;
        }
    }
    else {
        return "Enter a number";
    }
}

console.log(isLGSeven(5));