import React from "react";

const Hero = (props) => {
  const {nome,arena} = props
  return (
    <div>
    <h1> Eu, {nome}, estou lutando na arena {arena} </h1>
    </div>
  )
}
export default Hero
