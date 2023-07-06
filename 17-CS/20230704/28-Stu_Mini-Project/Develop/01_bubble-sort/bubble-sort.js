// Create our input data
const unsortedInputArray = [22,6,3,8,9,0,2,5,4,2];

// seed data in unsortedInputArray
// for (let i = 0; i < 2000; i++) {
//   unsortedInputArray.push(Math.round(Math.random() * 2000));
// }

// TODO: create bubble sort function
const bubbleSort = (array) => {
  let arraysort = array;

  for(let i =0 ; i < arraysort.length-1 ;i++){
    for(let e =0 ; e < arraysort.length-1 ;e++){
      if(e==arraysort.length-1){
        return;
      }
      if(arraysort[e]> arraysort[e+1]){      
        const aux = arraysort[e];
        arraysort[e] = arraysort[e+1];
        arraysort[e+1] = aux;
      }
    }
  }
  return arraysort;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted);
console.log('DONE!');
