
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix === null || matrix.length == 0){
    return [];
  }
  else {
    let array = [];
    for (let i=0; i<matrix.length; i++){
     if ((i+1) % 2 === 0){
       matrix[i] = matrix[i].reverse();
     }
     array = array.concat(matrix[i]);
    }
     return array;
  }

}
