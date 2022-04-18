import React from "react";

/*class Arena extends Component {
    render() {
        const { arena } = this.props
        return (
            <div>
                <h1>Arena {arena} </h1>
                ========================
                {
                    React.Children.map(
                        this.props.children,
                        (Warrior) => {
                            return React.cloneElement(Warrior, { arena: arena })

                        }
                    )
                }
            </div>
        )
    }

}*/

const Arena = (props)=> {
    
        //const { arena} = props
        return (
            <div>
                <h1>Arena {props.arena} </h1>
                ========================
                {
                    React.Children.map(
                        props.children,
                        (warrior) => {
                            return React.cloneElement(warrior, { ...props})

                        }
                    )
                }
            </div>
        )
    

}
export default Arena