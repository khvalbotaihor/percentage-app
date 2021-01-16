import React, {useState} from 'react';
import './App.css';
import {run} from "./Logic";
import InputContainer from "./inputContainer"

function App() {
    const [value, setValue] = useState([25,25,25,25]);

  return (
    <div className="App">

        <div className="Container">

            <InputContainer value={value[0]}/>
            <InputContainer value={value[1]}/>
            <InputContainer value={value[2]}/>
            <InputContainer value={value[3]}/>
        </div>


    </div>
  );
}
/*run();*/



export default App;
