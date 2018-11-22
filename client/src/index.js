import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const clickHandler=(va)=>{
    axios.post('/',va).
    then((res)=>{
        console.log(res.data)
    })
}

const App=()=>{
    return(
        <div>
            <input type="text" name="firsbox"/>
            <input type="submit" value="submit" onClick={()=>clickHandler('hello')}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

