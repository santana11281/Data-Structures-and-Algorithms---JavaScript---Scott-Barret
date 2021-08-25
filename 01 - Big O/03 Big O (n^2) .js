

// loop within a loop 


function logItem(n) {
  for (let index = 0; index < n; index++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(index, j, k);
      }
    }
  }
}


logItem(10);

