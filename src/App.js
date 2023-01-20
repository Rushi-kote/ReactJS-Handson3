import { useState } from "react";
import './App.css'

function App () {
  const [Toggle, setToggle] = useState(true);
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
    setToggle(false);
  }

  const HandleClickBack =()=>{
    setToggle(true);
  }

  return (
    <div className="container">
      {Toggle ? <>
        <h1>Employee FeedBack form</h1>
      <form>
        <label htmlFor="Name">Name: </label>
        <input type="text" name="Name" value={state.Name} onChange={HandleChange}></input><br/>
        <label htmlFor="Name">Department: </label>
        <input type="text" name="Department" value={state.Department} onChange={HandleChange}></input><br/>
        <label htmlFor="Name">Rating: </label>
        <input type="number" name="Rating" value={state.Rating} onChange={HandleChange}></input><br/>
        <button onClick={HandleClick}>Submit</button>
      </form>
      </>
      : 
      <>
        <div className="footer-container">
          {
            state.feedback.map((value,index)=>{
              return(
                <div className="flex-items" key={index}>
                    <span >Name:{value.Name} | Department: {value.Department} | Rating: {value.Rating}</span>
                </div>
              );
            })
          }
          <button onClick={HandleClickBack}>GoBack</button>
      </div> 
      </>
      }
        
    </div>
  );
 
}

export default App;
