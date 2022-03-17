Array.prototype.insertionSort = function () {
  for(let i = 1; i< this.length; i+=1) {
    const temp = this[i];
    let j = i;
    while( j> 0) {
      if(this[j-1] > temp) {
        this[j] = this[j-1];
      }else {
        break;
      }
      j-=1;
    }
    this[j] = temp;
  }
};

const arr = [5,4,3,2,1];
arr.insertionSort();

function insertionSort(arr) {
  for(let i = 1; i< arr.lengrh; i++) {
    const temp = arr[i];
    let j = i;
    while( j > 0) {
      if(arr[j-1] > temp) {
        arr[i] = arr[j-1]
      }else {
        break;
      }
      j = j-1;
    }
    arr[j] = temp;
  }
}