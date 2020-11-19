https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true&h_r=next-challenge&h_v=zen

// Complete the minimumBribes function below.
function minimumBribes(queue) {
    let result = 0;
    const MAX_SWAP = 2;
    for(let i = 0; i< queue.length; i++){
        let current = queue[i]
        let next = queue[i+1]
        let index = i+1
        
        if(current > index) {
            let placesMoved = current - index;
            if(placesMoved > MAX_SWAP) {
                console.log('Too chaotic')
                return
            }
        }
        let range = Math.max(0, current)


        if(next){
            if(current <= index && current > next) {
                result++
            }  
        }
    }
    console.log(result)
}

minimumBribes([2,1,3,5,4])
