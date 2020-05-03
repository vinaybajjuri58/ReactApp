import React from "react"

function Add(props){
  return(
    <div>
      <button onClick={()=>props.onChange()}>Add</button>
    </div>)
}

export default Add