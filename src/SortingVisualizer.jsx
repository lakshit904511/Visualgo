import React, { useContext, useEffect, useState } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Button,Icon, Input, Label,Transition,Modal, Header, Image} from 'semantic-ui-react'
import Slider from '@mui/material/Slider';
import "./sortingVisualizer.css";
import {
  performBubbleSort,
  performHeapSort,
  performInsertionSort,
  performMergeSort,
  performQuickSort,
  performSelectionSort
} from "./performSortings"
import facts from './facts.json';
import { ThemeContext } from "./App";

let arrayOfNumbers=[];
function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [isHidden, setHidden]=useState(false);
  const [pauseDisabled, setPauseDisabled] = useState(false);
  const [bubbleSort,setBubbleSort]=useState(false);
  const[selectionSort,setSelectionSort]=useState(false);
  const[insertionSort,setInsertionSort]=useState(false);
  const[quickSort,setQuickSort]=useState(false);
  const[mergeSort,setMergeSort]=useState(false);
  const[heapSort,setHeapSort]=useState(false);
  const[generateNewArrayHidden,setNewArray]=useState(false);
  const[resumeText,setResumeText]=useState(false);
  const[iState,setIState]=useState(0);
  const[jState,setJState]=useState(0);
  const[value,setValue]=useState(100);
  const[speed,setSpeed]=useState(50);
  const[input,setInput]=useState("");
  const[modal,setModal]=useState(true);
  const[open,setOpen]=useState(false);
  const[height,setHeight]=useState([]);
  const theme = useContext(ThemeContext);
  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  window.onresize = resetArray;

  function resetArray(event,force) {
    console.log(theme);
   if(input.length===0||force){
    const arr = [];
    const arrayBar = document.getElementById("sample");
    const effectiveSize = arrayBar.getBoundingClientRect().width + 4;
    const maxBars = ((window.innerWidth/2)/effectiveSize)*value/100;
    
    for (let i = 0; i < maxBars; i++) {
      arr.push(randomInterval(20, 400));
    }
    setArray(arr);
  }
  else{
    // console.log(arrayOfNumbers);
    const arr=[...arrayOfNumbers];
    setArray(arr);
  }
}

  useEffect(() => {
    setInput("");
    arrayOfNumbers=[];
    resetArray();
  }, []);

  useEffect(() => {
    const arr = document.getElementsByClassName('array-bar');
    const h = [];
    for(let i=0;i<arr.length;i++){
      h.push(arr[i].clientHeight);
    }
    setHeight(h);

    setInterval(()=>{
      const arr = document.getElementsByClassName('array-bar');
      const h = [];
      for(let i=0;i<arr.length;i++){
        h.push(arr[i].clientHeight);
      }
      setHeight(h);
    },10)
  }, [array]);
   
  //for generating new array
  function generateNewArray() {
    setIState(0);
    setJState(0);
    resetArray();
  }

  function forceGenerateNewArray(){
    setInput("");
    setIState(0);
    setJState(0);
    resetArray("","force");
  }

  //display original array in the console
  function ShowArray() {
    console.log(array);
  }
 
  const handleStop = ()=>{
      setResumeText(false);
      setNewArray(false);
      setInsertionSort(false);
      setHeapSort(false);
      setQuickSort(false);
      setMergeSort(false);
      setSelectionSort(false);
      setBubbleSort(false);
      setHidden(false);
      forceGenerateNewArray();
 }
  async function performSort(sort,nameOfAlgo){
    if(nameOfAlgo==='Heap Sort')setPauseDisabled(true);
    setHidden(true);
    if(nameOfAlgo==="Insertion Sort"){
      setResumeText(true);
      setNewArray(true);
      setHeapSort(true);
      setQuickSort(true);
      setMergeSort(true);
      setBubbleSort(true);
      setSelectionSort(true);
      setModal(false);
      await sort(array,setArray,iState,jState,setIState,setJState,setInsertionSort,handleStop);
      setHidden(false);
      setModal(true);
    }

    else if(nameOfAlgo==="Bubble Sort"){
      setResumeText(true);
      setNewArray(true);
      setInsertionSort(true);
      setHeapSort(true);
      setQuickSort(true);
      setMergeSort(true);
      setSelectionSort(true);
      setModal(false);
      await sort(array,setArray,iState,jState,setIState,setJState,setBubbleSort,handleStop);
      setModal(true);
      setHidden(false);
    }
    else if(nameOfAlgo==="Selection Sort"){
      setResumeText(true);
      setNewArray(true);
      setInsertionSort(true);
      setHeapSort(true);
      setQuickSort(true);
      setMergeSort(true);
      setBubbleSort(true);
      setModal(false);
      await sort(array,setArray,iState,jState,setIState,setJState,setSelectionSort,handleStop);
      setModal(true);
      setHidden(false);
    }
    else if(nameOfAlgo==="Quick Sort"){
      setResumeText(true);
      setNewArray(true);
      setInsertionSort(true);
      setBubbleSort(true);
      setSelectionSort(true);
      setHeapSort(true);
      setMergeSort(true);
      setModal(false);
      await sort(array,setArray,iState,jState,setIState,setJState,setQuickSort,handleStop);
      setModal(true);
      setHidden(false);
    }
    else if(nameOfAlgo==="Merge Sort"){
      setResumeText(true);
      setNewArray(true);
      setBubbleSort(true);
      setSelectionSort(true);
      setHeapSort(true);
      setQuickSort(true);
      setInsertionSort(true);
      setModal(false);
      await sort(array,setArray,iState,jState,setIState,setJState,setMergeSort,handleStop);
      setModal(true);
      setHidden(false);
    }
    else if(nameOfAlgo==="Heap Sort"){
      setResumeText(true);
      setNewArray(true);
      setBubbleSort(true);
      setSelectionSort(true);
      setMergeSort(true);
      setInsertionSort(true);
      setQuickSort(true);
      setModal(false);
      await sort(array,setArray,iState,jState,setIState,setJState,setHeapSort,handleStop);
      setModal(true);
      setHidden(false);
    }
    // setHidden(false);
    setPauseDisabled(false);
    // const A=[];
    // for(let i=0;i<array.length;i++){
    //   A.push(document.getElementById(i).getBoundingClientRect().height);
    // }
    // setArray(A);
  }

   function handleInput(){
    setInput(event.target.value);
    // console.log(array);
   }
   function handleSubmit(){
    arrayOfNumbers=[];
    let arrayOfStrings=input.split(",");
    // console.log(arrayOfStrings);
    arrayOfStrings.forEach(element => {
      arrayOfNumbers.push(Number(element));
    });
    resetArray();
   }
  return (
     <div>
     <div id="inputContainer">
     <Label as='a' color='violet' pointing="right">
     Enter the values in array
        </Label>
     <Input type={"text"}
     fluid 
     focus
     style={{width:"50%", margin:"10px"}}
     value={input} name="arrayInput" onChange={handleInput} autoComplete="off"/>
     <Button color="violet" size="small" onClick={handleSubmit}> Lets Go! </Button>
     </div>
     <div id="sliders">
     <div id="sizeSlider">
      <div className="iconContainer">
      <Icon name="minus" color={theme.theme==='dark'?'pink':'black'}/>
      </div>    
    <Slider color="secondary" size="small" value={value} min={10} max={100} step={10} valueLabelDisplay="auto" onChange={(event,value)=>{setValue(value);generateNewArray();}}/>
    <div className="iconContainer">
    <Icon name="plus" color={theme.theme==='dark'?'pink':'black'}/>
    </div>
    </div>
    
     <div data-value= {speed} id="speedControl" >
     <div className="iconContainer">
    <Icon name="backward" color={theme.theme==='dark'?'pink':'black'}/>
    </div>
    <Slider color="secondary" size="small" value={speed} min={10} max={100} step={10} valueLabelDisplay="auto" onChange={(event,value)=>{setSpeed(value)}}/>
    <div className="iconContainer">
    <Icon name="forward" color={theme.theme==='dark'?'pink':'black'}/>
    </div>
    </div>
</div>

<div>
  {
  !modal && (
        !insertionSort && (<Modal onClose={()=> setOpen(false)}
    onOpen={()=> setOpen(true)}
    open={open}
    trigger={<Button>Facts on Insertion Sort</Button>}>
    <Modal.Header>Insertion Sort</Modal.Header> 
    <Modal.Content image>
    <Image size="medium" src='https://miro.medium.com/max/282/1*k3CdGcgncPVj5qjiqskvTg.png' wrapped />
    <Modal.Description>
      <Header>Complexity:-{facts[1].complexity}</Header>
      <p>
        <h4>Description <Icon loading name="star"/></h4> {facts[1].facts}
        <h4>Adaptive <Icon name="circle check"/></h4> {facts[1].adaptive}
        <h4>Stable <Icon name="circle check"/></h4> {facts[1].stable}
      </p>
    </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button 
        content="Close"
        labelPosition="right"
        icon="close"
        onClick={()=> setOpen(false)}
        negative
      />
    </Modal.Actions>
  </Modal>)
  )
  }
  </div>
<div>
  {
  !modal && (
        !bubbleSort && (<Modal onClose={()=> setOpen(false)}
    onOpen={()=> setOpen(true)}
    open={open}
    trigger={<Button>Facts on Bubble Sort</Button>}>
    <Modal.Header>Bubble Sort</Modal.Header> 
    <Modal.Content image>
    <Image size="large" src='https://bournetocode.com/projects/GCSE_Computing_Fundamentals/pages/img/bubble_sort_pass.png' wrapped />
    <Modal.Description>
      <Header>Complexity:-{facts[0].complexity}</Header>
      <p>
        <h4>Description <Icon loading name="star"/></h4> {facts[0].facts}
        <h4>Adaptive <Icon name="circle check"/></h4> {facts[0].adaptive}
        <h4>Stable <Icon name="circle check"/></h4> {facts[0].stable}
      </p>
    </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button 
        content="Close"
        labelPosition="right"
        icon="close"
        onClick={()=> setOpen(false)}
        negative
      />
    </Modal.Actions>
  </Modal>)
  )
  }
  </div>
<div>
  {
  !modal && (
        !selectionSort && (<Modal onClose={()=> setOpen(false)}
    onOpen={()=> setOpen(true)}
    open={open}
    trigger={<Button>Facts on Selection Sort</Button>}>
    <Modal.Header>Selection Sort</Modal.Header> 
    <Modal.Content image>
    <Image size="large" src='https://www.programiz.com/sites/tutorial2program/files/Selection-sort-0-comparision.png' wrapped />
    <Modal.Description>
      <Header>Complexity:-{facts[2].complexity}</Header>
      <p>
        <h4>Description <Icon loading name="star"/></h4> {facts[2].facts}
        <h4>Adaptive <Icon name="times circle"/></h4> {facts[2].adaptive}
        <h4>Stable <Icon name="times circle"/></h4> {facts[2].stable}
      </p>
    </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button 
        content="Close"
        labelPosition="right"
        icon="close"
        onClick={()=> setOpen(false)}
        negative
      />
    </Modal.Actions>
  </Modal>)
  )
  }
  </div>
<div>
  {
  !modal && (
        !quickSort && (<Modal onClose={()=> setOpen(false)}
    onOpen={()=> setOpen(true)}
    open={open}
    trigger={<Button>Facts on Quick Sort</Button>}>
    <Modal.Header>Quick Sort</Modal.Header> 
    <Modal.Content image>
    <Image size="large" src='https://static.studytonight.com/data-structures/images/basic-quick-sort.png' wrapped />
    <Modal.Description>
      <Header>Complexity:-{facts[3].complexity}</Header>
      <p>
        <h4>Description <Icon loading name="star"/> <Icon loading name="star"/> <Icon loading name="star"/> <Icon loading name="star"/> <Icon loading name="star"/> </h4> {facts[3].facts}
        <h4>Adaptive <Icon name="times circle"/></h4> {facts[3].adaptive}
        <h4>Stable <Icon name="times circle"/></h4> {facts[3].stable}
      </p>
    </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button 
        content="Close"
        labelPosition="right"
        icon="close"
        onClick={()=> setOpen(false)}
        negative
      />
    </Modal.Actions>
  </Modal>)
  )
  }
  </div>
<div>
  {
  !modal && (
        !heapSort && (<Modal onClose={()=> setOpen(false)}
    onOpen={()=> setOpen(true)}
    open={open}
    trigger={<Button>Facts on Heap Sort</Button>}>
    <Modal.Header>Heap Sort</Modal.Header> 
    <Modal.Content image>
    <Image size="large" src='https://global-uploads.webflow.com/5d0dc87aac109e1ffdbe379c/60be35c5db7adf4d16e3d7f3_ZzgJzSvjWHACMEuhCgWYcrFVYuYFP8YVnugTBs53Ax6_tXi4CqBRFsCiooJcfXLQ8NKsfZ1v4VyCgEH0LlKXEt81WzVSSINUCM4GK6MtAzY3pL71a9eSRTeBSCnutyLkrhrNETSJ.png' wrapped />
    <Modal.Description>
      <Header>Complexity:-{facts[4].complexity}</Header>
      <p>
        <h4>Description <Icon loading name="star"/> <Icon loading name="star"/> <Icon loading name="star"/> </h4> {facts[4].facts}
        <h4>Adaptive <Icon name="times circle"/></h4> {facts[4].adaptive}
        <h4>Stable <Icon name="times circle"/></h4> {facts[4].stable}
      </p>
    </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button 
        content="Close"
        labelPosition="right"
        icon="close"
        onClick={()=> setOpen(false)}
        negative
      />
    </Modal.Actions>
  </Modal>)
  )
  }
  </div>
<div>
  {
  !modal && (
        !mergeSort && (<Modal onClose={()=> setOpen(false)}
    onOpen={()=> setOpen(true)}
    open={open}
    trigger={<Button>Facts on Merge Sort</Button>}>
    <Modal.Header>Merge Sort</Modal.Header> 
    <Modal.Content image>
    <Image size="large" src='https://www.simplilearn.com/ice9/free_resources_article_thumb/mergesort/merge_sort-what-img1.png' wrapped />
    <Modal.Description>
      <Header>Complexity:-{facts[5].complexity}</Header>
      <p>
        <h4>Description <Icon loading name="star"/> <Icon loading name="star"/> <Icon loading name="star"/> </h4> {facts[5].facts}
        <h4>Adaptive <Icon name="times circle"/></h4> {facts[5].adaptive}
        <h4>Stable <Icon name="circle check"/></h4> {facts[5].stable}
      </p>
    </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button 
        content="Close"
        labelPosition="right"
        icon="close"
        onClick={()=> setOpen(false)}
        negative
      />
    </Modal.Actions>
  </Modal>)
  )
  }
  </div>

      <div className="array-container">

        {array.map((value, index) => (
          <div
            className={`array-bar ${theme.theme}`}
            key={index}
            id={index}
            style={{ height: `${value}px` }}
          >
            {height[index]}
          </div>
        ))}
        <br />
        <div className="array-bar" style={{visibility:'hidden',height:'0px'}} id="sample"></div>
      </div>
      {
        !isHidden&&(
          <>
          <Transition
            animation="bounce" 
            duration={500} 
            >
              <Button color={theme.theme==='dark'?'violet':'blue'} style={{display:generateNewArrayHidden?"none":""}} onClick={forceGenerateNewArray}>
          Generate New Array</Button>
            </Transition>
        
        <Button className="sort-buttons" basic color={!resumeText?theme.theme==='dark'?'pink':"teal":"green"} style={{display:insertionSort?"none":""}} onClick={()=>performSort(performInsertionSort,"Insertion Sort")}>{!resumeText?"Insertion Sort":"Resume"}</Button>
        <Button className="sort-buttons" basic color={!resumeText?theme.theme==='dark'?'pink':"teal":"green"} style={{display:bubbleSort?"none":""}} onClick={()=>performSort(performBubbleSort,"Bubble Sort")}>{!resumeText?"BubbleSort":"Resume"}</Button>
        <Button className="sort-buttons" basic color={!resumeText?theme.theme==='dark'?'pink':"teal":"green"} style={{display:selectionSort?"none":""}} onClick={()=>performSort(performSelectionSort,"Selection Sort")}>{!resumeText?"SelectionSort":"Resume"}</Button>
        <Button className="sort-buttons" basic color={!resumeText?theme.theme==='dark'?'pink':"teal":"green"} style={{display:quickSort?"none":""}} onClick={()=>performSort(performQuickSort,"Quick Sort")}>{!resumeText?"Quick Sort":"Resume"}</Button>
        <Button className="sort-buttons" basic color={!resumeText?theme.theme==='dark'?'pink':"teal":"green"} style={{display:heapSort?"none":""}} onClick={()=>performSort(performHeapSort,"Heap Sort")}>{!resumeText?"Heap Sort":"Resume"}</Button>
        <Button className="sort-buttons" basic color={!resumeText?theme.theme==='dark'?'pink':"teal":"green"} style={{display:mergeSort?"none":""}} onClick={()=>performSort(performMergeSort,"Merge Sort")}>{!resumeText?"Merge Sort":"Resume"}</Button>
         <Button basic className="sort-buttons" color={theme.theme==='dark'?'grey':'black'} onClick={ShowArray}> Show Original Array </Button> 
        {generateNewArrayHidden&&(<Button secondary onClick={handleStop}> Reset </Button>)}
          </>
        )
      }
        <Button className="sort-buttons" id="pauseButton" inverted color="yellow" disabled={pauseDisabled} style={{display:!isHidden?"none":""}}  > Pause </Button>
        <Button className="sort-buttons" id="stopButton" style={{display:!isHidden?"none":""}} inverted color="red" >Stop</Button>
    </div>
  );
} 

export default SortingVisualizer;
