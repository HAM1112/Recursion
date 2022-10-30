function fibs(n){
    let fibsArray = [0,1]
    for(i=0;i<n-2;i++){
      fibsArray.push(fibsArray[i]+fibsArray[i+1])
    }
    return fibsArray;
  }
  

console.log(fibs(8));

  function fibsRec(n){
    let fibsArray = [];
    if (n === 1) {return [0]}
    if (n ===2) {return [0,1]}

    return [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]]

  }

  console.log(fibsRec(8));