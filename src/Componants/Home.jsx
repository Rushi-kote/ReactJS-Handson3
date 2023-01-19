import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [state, setState]= useState({
        Name: "",
        Department: "",
        Rating: "",
        feedback: []
    });
    
    
    const HandleChange = (event)=>{
        setState({...state,[event.target.name]: event.target.value});
        console.log(event.target.value);
    }
    
    const HandleClick = (event)=>{
      event.preventDefault();
      console.log(state);
      const arr ={
        Name : state.Name,
        Department : state.Department,
        Rating : state.Rating,
      }
      let temp = state.feedback;
      temp.push(arr);
      setState({...state,feedback : temp});
      console.log(state.feedback);
      <Link to='/showFeedBack' state={state}></Link>
    }
    
    return (
        <div className="container">
            <h1>Employee FeedBack form</h1>
            <form>
                <label htmlFor="Name">Name: </label>
                <input type="text" name="Name" value={state.Name} onChange={HandleChange}></input><br/>
                <label htmlFor="Name">Department: </label>
                <input type="text" name="Department" value={state.Department} onChange={HandleChange}></input><br/>
                <label htmlFor="Name">Rating: </label>
                <input type="number" name="Rating" value={state.Rating} onChange={HandleChange}></input><br/>
            </form> 
        <button onClick={HandleClick}>Submit</button>
        </div>
    );
}

export default Home