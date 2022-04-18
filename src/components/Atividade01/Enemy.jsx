import React, {Component} from "react";

class Enemy extends Component{
  render(){
    const {nome,arena} = this.props
    return (
      <div>
      <h1> Eu, {nome}, estou lutando na arena {arena} </h1>
      </div>
    )
  }
}
/*
const Enemy = (props) => {
  const {nome,arena} = props
  return (
    <div>
    <h1> Eu, {nome}, estou lutando na arena {arena} </h1>
    </div>
  )
}*/
export default Enemy