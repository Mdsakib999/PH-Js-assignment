
/* This function takes 3 number as parameter and calculate them according to given instructions. If the total sum of the calculations is less than 2000, return the sum as output. If the total sum is greater than 2000 then subtract 2000 from the total value and return the result as output. */


function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {

    if(typeof firstFriendGem == "number" && typeof secondFriendGem == "number" && typeof thirdFriendGem == "number") {

        let firstFriendDiamond = firstFriendGem *21;

        let secondFriendDiamond = secondFriendGem * 32;
        let thirdFriendDiamond = thirdFriendGem * 43;
    
        let totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    
        if( totalDiamond < 2000) {
            return totalDiamond;
        }
    
        else{
            let restDiamond = totalDiamond - 2000;
    
            return restDiamond;
        }
    }

    else{
        return "provide all parameter as number"
    }
}


console.log(gemsToDiamond(100,5,9));