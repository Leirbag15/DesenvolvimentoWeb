import React, {Component} from "react";
class Hero extends Component{
  render(){
    const {nome,arena} = this.props
    return (
      <div>
      <h1> Eu, {nome}, estou lutando na arena {arena} </h1>
      </div>
    )
  }
}
/*const Hero = (props) => {
  const {nome,arena} = props
  return (
    <div>
    <h1> Eu, {nome}, estou lutando na arena {arena} </h1>
    </div>
  )
}*/
export default Hero