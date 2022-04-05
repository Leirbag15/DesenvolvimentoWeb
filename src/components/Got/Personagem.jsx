import React from "react";

/*class Personagem extends Component {
    render() {
        const {nome, casa, localizacao} = this.props
        return(
            <div>
                Personagem {nome} da casa {casa} em {localizacao}
            </div>
        )
    }
}
*/
const Personagem = (props) =>{
    const  {nome,casa,localizacao}=props
    return (
        <div>
           Personagem {nome} da casa {casa} em {localizacao}
        </div>
    )
}

export default Personagem