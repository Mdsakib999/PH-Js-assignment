
/* The findingBadData() function takes an array as input and checks how many elements of this array have values less than 0 and returns the sum of the values of these elements.*/
/* 
function findingBadData(array) {

    
    if(typeof array == "object") {
       
        let badData = 0;
        
        for(let i = 0; i < array.length; i++) {
                if(array[i] < 0) {
                    badData += 1;
                }
            }
            return badData;
    }

    else{
        return "Enter an array"
    }

}

 */






// --------------------------------

function findingBadData(array) {

    
    if(typeof array == "object") {
       
        let badData = 0;
        
        for(let i = 0; i < array.length; i++) {
                if(typeof array[i] == "string") {
                    continue;
                }
                else{
                    if(array[i] < 0) {
                        badData += 1;
                    }
                }
            }
            return badData;
    }

    else{
        return "Enter an array"
    }

}

var arr = [ -8,5,-6, 5,9,-6,"-9"];

console.log(findingBadData(arr));