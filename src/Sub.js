import React from "react"
function Sub(props){
  return(
    <div>
      <button onClick={()=>props.onChange()}>Sub</button>
    </div>
  )
}
export default Sub