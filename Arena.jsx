import React, {Component} from "react";

class Arena extends Component {
  render(){
    const {arena} = this.props
    return(
     <div>
     <h1>Arena {arena} </h1>
     ========================
     {
       React.Children.map(
         this.props.children,
         (Warrior)=>{
           return React.cloneElement(Warrior, {arena:arena})

         }
       )
     }
     </div> 
    )
  }
  
}
