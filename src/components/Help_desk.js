import React,{useState} from "react";
const Help_desk=(props)=>{
  const[enteredName,setEnteredName]=useState('');
    const[enteredQuery,setEnteredQuery]=useState('');
    
    
    const nameChangeHandler=(event)=>{
      setEnteredName(event.target.value);
    };
    const queryChangeHandler=(event)=>{
      setEnteredQuery(event.target.value);
    };
   
    const onClickHandler=()=>{
           
           const queryData={
            name:enteredName,
            query:enteredQuery,
         
        }
       
            // console.log(expenseData);

        props.onSaveQueryData(queryData);
        
      };
    return(
        <div>
            
            <div className="alert alert-primary" role="alert">
            <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" onChange={nameChangeHandler}/>
    <div id="emailHelp" className="form-text">We'll never share your name with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">query:</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your query" onChange={queryChangeHandler}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={onClickHandler}>Submit</button>
</form>
                
            </div>
      
        </div>
    );
}
export default Help_desk;