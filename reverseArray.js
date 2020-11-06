function reverseArray(inputArray) {
    // [1,2,3,4,5]
    // brutal approach => new array, iterate in reverse & insert in a new array
    // o(N) time & O(N) space ( but we duplicate space)
    // reversal in place -> grab & save first element, put in last ele, put first ele
    // move boundaries by one
    // edge cases -> array is 0, array is 1, array is odd
    // array is 0 & 1 -> return
    // array is odd -> 
    // [1,3,4,5,5]
    // i=0 -> 1 & len = 5 -> last index = (len -1 - i) 
    // max = len(5) /2 ) rounded down => 5/2 -> 2 ( we replace 1 & 2)
    // edge cases are already taken care of
    
        const middle = Math.floor(inputArray.length/2)
        let temp;
        let reverseIndex;
        for(let i=0; i<middle; i++){
            temp = inputArray[i]
            reverseIndex = inputArray.length - 1 - i
            inputArray[i] = inputArray[reverseIndex]
            inputArray[reverseIndex] = temp
        }
        return inputArray;
    }