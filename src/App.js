import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Phrase from './Phrase';

function App(){

  const [phrase,setPhrase] = useState({});

  const checkApi = async () =>{
    const result = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //console.log(result.data[0]);
    setPhrase(result.data[0]);
  }

  useEffect(
    () =>{
        checkApi();
    },[]
  )

    console.log(phrase);

  return (
    <div className="contenedor">
      <Phrase
        phrase={phrase}
      />
      <button onClick={checkApi}>New Phrase</button>
    </div>
  )
}

export default App;