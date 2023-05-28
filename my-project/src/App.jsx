import { useEffect, useState } from 'react'
import { useRef } from 'react'
import './App.css'
import Anotherdiv from './anotherdiv'

function App() {
  let view='how are you'
  
  const [count, setCount] = useState(0)
  count>=4 ?view='above 5':"not "
  const first = useRef(0) //using use ref because we cant use usestate inside a useeffect
  useEffect(()=>{
     //in every button clicked or the every time the page is rendered this function will be run
      
      first.current=first.current+1
  })
  //if we provide an empty array the function will be run once after the first rendering\
  // also we can able to pass the variable name of a state to justify that if that state only change in that time only the function will be run
  
  return (
    <>
      
      <div className="card">

        <button onClick={()=>{
          setCount(count-1)
        }}>-</button>

        <button onClick={()=>{
        setCount(0)
      }}>
          {count}
        </button>
        
        <button onClick={()=>{
          setCount(count+1)
          count>4 ? alert("helli") :alert("hii")

        }}>
          +
        </button>

        <div>
          {count>=10 ?"hello world" :"world ends"}
        </div>
      </div>
      <title>
        {count}
      </title>
      <div>renders ={first.current}</div>
      <Anotherdiv write={view} ></Anotherdiv>
      
      
    </>
  )
}

export default App
