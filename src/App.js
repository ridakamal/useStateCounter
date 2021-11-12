
import React from 'react'
import { useState } from 'react'

const App = () => {

const [hyva , setHyva] = useState(0);
const [huono , setHuono] = useState(0);
const [neutrali , setNeutrali] = useState(0);


const inc = () => {
setHyva(hyva+1);

}
const dec = () => {
setHuono(huono-1);
}
const neut = () =>{
  setNeutrali(neutrali+1);
}

  return (
    <div>
      <h1>This is my feedback counter with useState</h1>
      <h3>Hyva : {hyva} </h3>
      <h3>Huono : {huono} </h3>
      <h3>Neutrali : {neutrali} </h3>
      <button onClick= {inc} >hyva</button>
      <button onClick={dec} >Huono</button>
      <button onClick= {neut} >Neutrali</button>
    </div>
  )
}

export default App;

