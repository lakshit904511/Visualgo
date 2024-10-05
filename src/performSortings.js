import  {
    InsertionSort,
    bubbleSort,
    Heapify,
    HeapSort,
    SelectionSort,
    mergeSort,
    quickSort
  } from "./sortingAlgorithm/allSortingAlgrithms";
  

  let steps=[];
  //helper function to perform animation
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };  
  
  //Insertion Sort Visualization
  async function performInsertionSort(array,setArray,iState,jState,setIState,setJState,setInsertionSort,handleStop){
    
    let temp1=false;
    const setTemp1 = ()=>{
      temp1  = !temp1;
    }
    let stopped = false;
    const setStopped = ()=>{
      stopped = true;
    }
    document.getElementById("stopButton").addEventListener("click",setStopped);
    document.getElementById("pauseButton").addEventListener("click",setTemp1);
    const objectArray = InsertionSort(array.slice());
    let j = jState;
    for (let i = iState; i < objectArray.length; i++) {
      for (; j < objectArray[i].length; j++) {
        let speed=Number(document.getElementById("speedControl").getAttribute("data-value"));
        // console.log(objectArray[i][j]);
        const { a,b } = objectArray[i][j];
        // console.log(idx1 + " " + idx2 + " " + swap);
        const arrayBars = document.getElementsByClassName("array-bar");

        arrayBars[a].classList.toggle("active");
        arrayBars[b].classList.toggle("active");
        await sleep(10*100/speed);

        const temp = arrayBars[a].style.height;
        arrayBars[a].style.height = arrayBars[b].style.height;
        arrayBars[b].style.height = temp;
        await sleep(10*100/speed);

        arrayBars[a].classList.toggle("active");
        arrayBars[b].classList.toggle("active");
        if(temp1){
          setJState(j+1);
          break;
        }
        if(stopped){
          document.getElementById('stopButton').removeEventListener('click',setStopped);
          handleStop();
          return;
        }
      }
      if(temp1){
        setIState(i);
        return;
      }
      j=0;
    }
    setInsertionSort(true);
    document.getElementById("pauseButton").removeEventListener("click",setTemp1);
  }

  //Selection Sort Visualization
  async function performSelectionSort(array,setArray,iState,jState,setIState,setJState,setSelectionSort,handleStop) {
    let temp1=false;
    const setTemp1 = ()=>{
      temp1  = !temp1;
    }
    let stopped = false;
    const setStopped = ()=>{
      stopped = true;
    }
    document.getElementById("stopButton").addEventListener("click",setStopped);
    document.getElementById("pauseButton").addEventListener("click",setTemp1);
    let j = jState
    const objectArray = SelectionSort(array.slice());
    for (let i = iState; i < objectArray.length; i++) {
      for (; j < objectArray[i].length; j++) {
        let speed=Number(document.getElementById("speedControl").getAttribute("data-value"));
        const { a: idx1, b: idx2 } = objectArray[i][j];
        // const arrayBars = document.getElementsByClassName("array-bar");
        // const barOneStyle = arrayBars[idx1].style;
        // const barTwoStyle = arrayBars[idx2].style;

        const barA=document.getElementById(idx1)
        const barB=document.getElementById(idx2);

        barA.classList.toggle("active");
        barB.classList.toggle("active");
        await sleep(10*100/speed);

        const temp = barA.style.height;
        barA.style.height = barB.style.height;
        barB.style.height = temp;
        await sleep(10*100/speed);

        // barOneStyle.backgroundColor = "turquoise";
        // barTwoStyle.backgroundColor = "turquoise";

        barA.classList.toggle("active");
        barB.classList.toggle("active");
        if(temp1){
          setJState(j+1);
          break;
        }
        if(stopped){
          document.getElementById('stopButton').removeEventListener('click',setStopped);
          handleStop();
          return;
        }
      }
      if(temp1){
        setIState(i);
        return;
      }
      j=0;
    }
    setSelectionSort(true);
    document.getElementById("pauseButton").removeEventListener("click",setTemp1);
  }

//Bubble sort Visualization
async function performBubbleSort(array,setArray,iState,jState,setIState,setJState,setBubbleSort,handleStop){
  let temp1=false;
  const setTemp1 = ()=>{
    temp1  = !temp1;
  }
  let stopped = false;
  const setStopped = ()=>{
    stopped = true;
  }
  document.getElementById("stopButton").addEventListener("click",setStopped);
  document.getElementById("pauseButton").addEventListener("click",setTemp1);
  const {steps,sortedArray} = bubbleSort(array.slice());

  let j=jState;
  for ( let i=iState; i < steps.length; i++) {
    for (  ; j < steps[i].length; j++) {
      let speed=Number(document.getElementById("speedControl").getAttribute("data-value"));
      const { a: idx1, b: idx2 } = steps[i][j];
      // const arrayBars = document.getElementsByClassName("array-bar");
      const barA=document.getElementById(idx1)
      const barB=document.getElementById(idx2);
      

      barA.classList.toggle("active");
      barB.classList.toggle("active");
      await sleep((10*100)/speed);

      if(steps[i][j].swap){
        const temp = barA.style.height;
        barA.style.height = barB.style.height;
        barB.style.height = temp;
      }

      await sleep((10*100)/speed);
      // barOneStyle.backgroundColor="turquoise";
      // barTwoStyle.backgroundColor="turquoise";
      barA.classList.toggle("active");
      barB.classList.toggle("active");

      if(temp1){
        // console.log(temp1);
        setJState(j+1);
        break;
      }
      if(stopped){
        document.getElementById('stopButton').removeEventListener('click',setStopped);
        handleStop();
        return;
      }
    }
    if(temp1){
      setIState(i);
      return;
    }
    j=0;
  }
  // setArray(sortedArray);
  setBubbleSort(true);
  document.getElementById("pauseButton").removeEventListener("click",setTemp1);
}


  //Heap Sort Visualization
  async function performHeapSort(array, setArray,iState,jState,setIState,setJState,setHeapSort,handleStop) {
    let len = array.length;
    let stopped=false;
    const setStopped=()=>{
      stopped=true;
    }
    document.getElementById("stopButton").addEventListener("click",setStopped);
    // console.log(len);
    // console.log(array);
    let heapifiedArrayAndSwappedIndexes = Heapify(array.slice(), len);
    let length = heapifiedArrayAndSwappedIndexes.length;
    // console.log(heapifiedArrayAndSwappedIndexes);
    const heapifiedArray = heapifiedArrayAndSwappedIndexes[length - 1];
    // const heapifiedArraylength = heapifiedArray.length;
    // console.log(heapifiedArray);
    // let heapifiedArray2 = heapifiedArray.slice();
    let onlyswappedIndexes = heapifiedArrayAndSwappedIndexes.slice(
      0,
      length - 1
    );
    // console.log(onlyswappedIndexes);
    const arrayOfObject = HeapSort(heapifiedArray, heapifiedArray.length);

    // animation for creation of heap
    let lengthOfSwappedIndexesArray = onlyswappedIndexes.length;
    for (let i = 0; i < lengthOfSwappedIndexesArray; i++) {
      let speed=Number(document.getElementById("speedControl").getAttribute("data-value"));
      const { idx1: index1, idx2: index2 } = onlyswappedIndexes[i];
      // const arrayBars = document.getElementsByClassName("array-bar");
      // const barOneStyle = arrayBars[index1].style;
      // const barTwoStyle = arrayBars[index2].style;
      const barA=document.getElementById(index1)
      const barB=document.getElementById(index2);
      // barOneStyle.backgroundColor = "red";
      // barTwoStyle.backgroundColor = "red";
      barA.classList.toggle("active");
      barB.classList.toggle("active");

      await sleep(10*100/speed);
      const temp = barA.style.height;
        barA.style.height = barB.style.height;
        barB.style.height = temp;
      await sleep(10*100/speed);

      // barOneStyle.backgroundColor = "turquoise";
      // barTwoStyle.backgroundColor = "turquoise";

      barA.classList.toggle("active");
      barB.classList.toggle("active");
      if(stopped){
        document.getElementById('stopButton').removeEventListener('click',setStopped);
        handleStop();
        return;
      }

    }
    // console.log("heap created");

    // animation for Sorting
    let lengthOfArrayOfObjects = arrayOfObject.length;

    for (let i = 0; i < lengthOfArrayOfObjects; i++) {
      const { a, b } = arrayOfObject[i][0];
      // console.log("swapping first index with last");
      // const arrayBars = document.getElementsByClassName("array-bar");
      let speed=Number(document.getElementById("speedControl").getAttribute("data-value"));
      // const barOneStyle = arrayBars[a].style;
      // const barTwoStyle = arrayBars[b].style;
      const barA=document.getElementById(a)
      const barB=document.getElementById(b);
      // barOneStyle.backgroundColor = "red";
      // barTwoStyle.backgroundColor = "red";

      barA.classList.toggle("active");
      barB.classList.toggle("active");

      await sleep(10*100/speed);
      const temp = barA.style.height;
      barA.style.height = barB.style.height;
      barB.style.height = temp;
      await sleep(10*100/speed);

      // barOneStyle.backgroundColor = "turquoise";
      // barTwoStyle.backgroundColor = "turquoise";
      barA.classList.toggle("active");
      barB.classList.toggle("active");
      for (let j = 1; j < arrayOfObject[i].length; j++) {
        // console.log("putting the swapped value in form of max heap");
        const { index1, index2 } = arrayOfObject[i][j];
        // const arrayBars = document.getElementsByClassName("array-bar");
        // const barOneStyle = arrayBars[index1].style;
        // const barTwoStyle = arrayBars[index2].style;

        const barA=document.getElementById(index1)
        const barB=document.getElementById(index2);

        // barOneStyle.backgroundColor = "red";
        // barTwoStyle.backgroundColor = "red";
        barA.classList.toggle("active");
        barB.classList.toggle("active");
        await sleep(10*100/speed);
        const temp = barA.style.height;
        barA.style.height = barB.style.height;
        barB.style.height = temp;
        await sleep(10*100/speed);

        // barOneStyle.backgroundColor = "turquoise";
        // barTwoStyle.backgroundColor = "turquoise";
        barA.classList.toggle("active");
        barB.classList.toggle("active");
        if(stopped){
          document.getElementById('stopButton').removeEventListener('click',setStopped);
          handleStop();
          return;
        }
      }

    }
    // setArray(sortedArray);
    setHeapSort(true);
  }
//Merge Sort Visualization

  async function performMergeSort(array,setArray,iState,jState,setIState,setJState,setMergeSort,handleStop) {
    let temp1=false;
    const setTemp1 = ()=>{
      temp1  = !temp1;
    }
    let stopped = false;
    const setStopped = ()=>{
      stopped = true;
    }
    document.getElementById("stopButton").addEventListener("click",setStopped);
    document.getElementById("pauseButton").addEventListener("click",setTemp1);
    let {steps,sortedArray} = mergeSort(array.slice());
    let j = jState;
    for(let i=iState;i<steps.length;i++){
      for(;j<steps[i].length;j++){
        let speed=Number(document.getElementById("speedControl").getAttribute("data-value"));
          let a = document.getElementById(steps[i][j].a);
          let c = document.getElementById(steps[i][j].copy.pos);
          let b = document.getElementById(steps[i][j].b);
          a.classList.toggle('active');
          b?.classList.toggle('active');
          c.classList.toggle('copiedposition');
          await sleep(10*100/speed);
          c.style.height = `${steps[i][j].copy.val}px`;
          await sleep(10*100/speed);
          a.classList.toggle('active');
          b?.classList.toggle('active');
          c.classList.toggle('copiedposition');
          if(temp1){
            setJState(j+1);
            break;
          }
          if(stopped){
            document.getElementById('stopButton').removeEventListener('click',setStopped);
            handleStop();
            return;
          }
      }
      if(temp1){
        setIState(i);
        return;
      }
      j = 0;
    }
    setMergeSort(true);
    document.getElementById("pauseButton").removeEventListener("click",setTemp1);
    // setArray(sortedArray);
  }

  //QuickSort Visualization
  async function performQuickSort(array,setArray,iState,jState,setIState,setJState,setQuickSort,handleStop) {
    let temp1=false;
    const setTemp1 = ()=>{
      temp1  = !temp1;
    }
    let stopped = false;
    const setStopped = ()=>{
      stopped = true;
    }
    document.getElementById("stopButton").addEventListener("click",setStopped);
    document.getElementById("pauseButton").addEventListener("click",setTemp1);
    if(steps.length===0){
      steps = quickSort(array.slice()).steps;
    }
    let j = jState;
    // console.log(steps);
    for(let i = iState;i<steps.length;i++){
      for(;j<steps[i].length;j++){
        let speed=Number(document.getElementById("speedControl").getAttribute("data-value"));
        if(j===0){
          const highIndex = document.getElementById(steps[i][j].b);
          const pivot = document.getElementById(steps[i][j].a);
          pivot.classList.toggle('copiedposition');
          await sleep(10*100/speed);
          highIndex.classList.toggle('active');
          await sleep(10*100/speed);
          const tmp = highIndex.style.height;
          highIndex.style.height = pivot.style.height;
          pivot.style.height = tmp;
          pivot.classList.toggle('copiedposition');
          pivot.classList.toggle('active')
          highIndex.classList.toggle('active');
          highIndex.classList.toggle('copiedposition');
          await sleep(10*100/speed);
          pivot.classList.toggle('active');
          await sleep(10*100/speed);
          continue;
        }
        if(j===steps[i].length-1){
          const a = document.getElementById(steps[i][j].a);
          const b = document.getElementById(steps[i][j].b);
          a.classList.toggle('active');
          await sleep(10*100/speed);
          const tmp = b.style.height;
          b.style.height = a.style.height;
          a.style.height = tmp;
          await sleep(10*100/speed);
          a.classList.toggle('active');
          b.classList.toggle('copiedposition');
          a.classList.toggle('copiedposition');
          await sleep(10*100/speed);
          a.classList.toggle('copiedposition');
          continue;
        }
        let a,b;
        a = document.getElementById(steps[i][j].a);
        b = document.getElementById(steps[i][j].b);
        a.classList.toggle('active');
        b.classList.toggle('active');
        if(steps[i][j].swap){
          await sleep(10*100/speed);
          const tmp = a.style.height;
          a.style.height = b.style.height;
          b.style.height = tmp;
        }
        await sleep(10*100/speed);
        a.classList.toggle('active');
        b.classList.toggle('active');
        if(temp1){
          setJState(j+1);
          break;
        }
        if(stopped){
          steps=[];
          document.getElementsByClassName('copiedposition')[0].classList.toggle('copiedposition');
          document.getElementById('stopButton').removeEventListener('click',setStopped);
          handleStop();
          return;
        }
      }
      if(temp1){
        setIState(i);
        return;
      }
      j = 0;
    }
    steps=[];
    setQuickSort(true);
    document.getElementById("pauseButton").removeEventListener("click",setTemp1);
    // setArray(sortedArray);
  }

  export {performInsertionSort, performBubbleSort, performSelectionSort, performHeapSort, performMergeSort, performQuickSort}