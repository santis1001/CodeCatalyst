const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
function linearSearch(array, element) {
    let position = -1;
    let pos = 0;
    array.forEach((el) => {
      if (el == element) {
        position = pos;
      }
      pos++;
    });
    return position;
  }
  

module.exports = linearSearch;
