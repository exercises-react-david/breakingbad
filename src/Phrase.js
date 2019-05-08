import React from 'react';

function Phrase(props){
    return(
        <div className="frase">
            <h1>{props.phrase.quote}</h1>
            <p>- {props.phrase.author}</p>
        </div>
    )
}

export default Phrase;