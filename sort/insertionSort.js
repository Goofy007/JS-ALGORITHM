Array.prototype.insertionSort = function () {
  for(let i = 1; i< this.length; i+=1) {
    const temp = this[i];
    let j = i;
    while( j> 0) {
      if(this[j-i] > temp) {
        this[j] = this[j-i];
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