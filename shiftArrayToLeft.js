// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true

function createArray(arraySize){
    let arr = []
    for(let i=1; i<=arraySize; i++){
        arr.push(i)
    }
    return arr
}

function shiftArray(inputArray, placesToShiftLeft){
    let outputArray = []
    
    for(let i = placesToShiftLeft; i<inputArray.length; i++){
        outputArray.push(inputArray[i])
    }
    
    for(let i = 0; i<placesToShiftLeft; i++){
        outputArray.push(inputArray[i])
    }
    
    return outputArray
}

// Complete the rotLeft function below.
function rotLeft(sizeOfArray, howManyPlacesToShift) {
let placesToShift = howManyPlacesToShift % sizeOfArray
    
    const arr = createArray(sizeOfArray) 

    if(placesToShift === 0) { return arr }
    
    return shiftArray(arr, placesToShift);
 }

console.log(rotLeft(5, 2))
