import React from "react"
import Add from "./Add"
import Sub from "./Sub"
// import randomcolor from "randomcolor"
// import styles from "./styles.css"


class App extends React.Component{
  constructor(){
    super()
    this.state ={
      cnt : 1,
      clr : ""
    }
    this.Add = this.Add.bind(this)
    this.Sub = this.Sub.bind(this)
  }
  Sub(){
    this.setState(prevState =>{
      return{
        cnt : prevState.cnt - 1,
        // clr : randomcolor()
      }
    }     
    )
  }
  Add(){
    this.setState(
      prevState=>{
        return{
          cnt:prevState.cnt+1,
          // clr : randomcolor()
        }
      }
    )
  }
  render(){
    return(
    <div >
      <h1 style={{
        color:this.state.clr 
        //  height: 100 px ,
        //  border: 2px solid red 
      }}>
  {this.state.cnt}</h1>
      <Add onChange={this.Add}/>
      <Sub onChange={this.Sub}/>
    </div>
    )
  }
}
export default App