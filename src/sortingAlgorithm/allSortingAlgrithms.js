// let arr2 = [];
function InsertionSort(Array) {
  let arr = [];
  for (let i = 1; i < Array.length; i++) {
    let arr1 = [];
    let j = i - 1;

    let x = Array[i];
    while (j > -1 && Array[j] > x) {
      //swapping using destructuring
      [Array[j + 1], Array[j]] = [Array[j], Array[j + 1]];
      let obj = {
        a: j + 1,
        b: j
      };

      j--;
      arr1.push(obj);
    }
    arr.push(arr1);
  }
  // console.log(Array);
  // console.log(arr);
  return arr;
}
function SelectionSort(Array) {
  let arr = [];
  let i, j, k;
  // let obj={};
  for (i = 0; i < Array.length - 1; i++) {
    let arr1 = [];
    for (j = k = i; j < Array.length; j++) {
      if (Array[j] < Array[k]) {
        k = j;
      }
    }
    [Array[i], Array[k]] = [Array[k], Array[i]];
    let obj = {
      a: i,
      b: k
    };
    arr1.push(obj);

    arr.push(arr1);
  }
  // console.log(Array);
  // console.log(arr);
  return arr;
}


const bubbleSort = (arr)=>{
    const passes = [];
    let swapped = false;
    for(let i=0;i<arr.length;i++){
        let itr = [];
        for(let j=0;j<arr.length-i-1;j++){
            itr[j] = {
                a : j,
                b : j+1 
            };
            if(arr[j]>arr[j+1]){
                swapped=true;
                itr[j]['swap'] = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        passes.push(itr)
        if(!swapped)break;
    }
    return {steps:passes,sortedArray:arr};
}



//For Heap Sort
function HeapSort(array, len) {
  let res = [];
  for (let i = len - 1; i > 0; i--) {
    res.push(Delete(array, i));
  }
  return res;
}

function Heapify(Array, n) {
  let packageArray = [];
  for (let i = Math.floor((n - 2) / 2); i >= 0; i--) {
    let j = 2 * i + 1;
    let obj = {};
    while (j <= n - 1) {
      if (j + 1 < n && Array[j] < Array[j + 1]) {
        j = j + 1;
      }
      if (Array[i] < Array[j]) {
        obj = {
          idx1: i,
          idx2: j
        };
        packageArray.push(obj);
        [Array[i], Array[j]] = [Array[j], Array[i]];
        i = j;
        j = 2 * i + 1;
      } else {
        break;
      }
    }
  }
  packageArray.push(Array);
  // return(obj);
  // return Array;
  // console.log("Heapified Array " + Array);
  return packageArray;
}

function Delete(arr, n) {
  let val = arr[0];
  arr[0] = arr[n];
  arr[n] = val;
  let arrOfObj = [];
  let obj1 = {
    a: 0,
    b: n
  };
  arrOfObj.push(obj1);
  let i = 0;
  let j = 2 * i + 1;
  while (j <= n - 1) {
    if (j <= n - 2 && arr[j + 1] >= arr[j]) {
      j = j + 1;
    }
    if (arr[i] < arr[j]) {
      let obj2 = {
        index1: i,
        index2: j
      };
      arrOfObj.push(obj2);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i = j;
      j = 2 * j + 1;
    } else {
      break;
    }
  }
  // console.log(arr);
  return arrOfObj;
  // return obj;
}

const mergeSort = (array)=>{
  const steps=[];
  divideAndMerge(array,0,array.length,steps)
  return {steps:steps,sortedArray:array};
}

const divideAndMerge = (array, start, end,steps)=>{
  if(end-start<2)return;
  let mid  = parseInt((start+end)/2);
  divideAndMerge(array,start,mid,steps);
  divideAndMerge(array,mid,end,steps);
  merge(array,start,mid,end,steps);
}

const merge = (array,start,mid,end,steps)=>{
  if(array[mid-1]<=array[mid]) return;
  let i=start, j=mid, k=start;
  const tmpArray = [];
  const itr = [];
  while(i<mid&&j<end){
      itr.push({
          a:i,
          b:j,
          copy:{
              val:array[i]<=array[j]?array[i]:array[j],
              pos:k++
          }
      })
      if(array[i]<=array[j]){
          tmpArray.push(array[i++]);
      }
      else{
          tmpArray.push(array[j++]);
      }
  }

  while(i<mid){
      itr.push({
          a:i,
          b:j,
          copy:{
              val: array[i],
              pos:k++
          }
      })
      tmpArray.push(array[i++]);
  }

  while(j<end){
      itr.push({
          a:j,
          b:i,
          copy:{
              val: array[j],
              pos:k++
          }
      })
      tmpArray.push(array[j++]);
  }
  for(k=0;k<tmpArray.length;k++){
      array[start+k] = tmpArray[k];
  }
  steps.push(itr);
}

const quickSort = (array)=>{
  let steps = [];
  partitionAndSort(array, 0, array.length-1,steps);
  return {steps:steps,sortedArray:array};
}

const partitionAndSort = (array, lowIndex, highIndex,steps) =>{
  const itr = [];
  if(lowIndex>=highIndex)return;
  const pivotIndex = lowIndex + Math.floor(Math.random()*(highIndex-lowIndex));
  const pivot = array[pivotIndex];
  let step = {
      a: pivotIndex,
      b: highIndex,
      swap: true
  }
  itr.push(step);
  [array[pivotIndex],array[highIndex]] = [array[highIndex],array[pivotIndex]];
  let leftPointer = lowIndex;
  let rightPointer = highIndex;

  while(leftPointer < rightPointer){
      while(array[leftPointer] <= pivot && leftPointer < rightPointer){
          step = {
              a: leftPointer,
              b:rightPointer
          }
          itr.push(step);
          leftPointer++;
      }

      while(array[rightPointer] >= pivot && leftPointer < rightPointer){
          step = {
              a: rightPointer,
              b:leftPointer
          }
          itr.push(step);
          rightPointer--;
      }
      step = {
          a: leftPointer,
          b: rightPointer,
          swap: true
      }
      itr.push(step);
      [array[leftPointer],array[rightPointer]] = [array[rightPointer],array[leftPointer]];
  }
  step = {
      a:leftPointer,
      b:highIndex,
      swap: true
  }
  itr.push(step);
  [array[leftPointer],array[highIndex]] = [array[highIndex],array[leftPointer]];
  steps.push(itr);

  partitionAndSort(array, lowIndex, leftPointer-1,steps);
  partitionAndSort(array, leftPointer+1, highIndex,steps);
}

export { SelectionSort,  InsertionSort, bubbleSort, Heapify, Delete, HeapSort, mergeSort, quickSort};

