import React, { Component } from "react";

/* class Questao02 extends Component {
    render() {
        return (
            <div>
                <h2> Nome: Gabriel Bezerra Araújo </h2>
                <h2> Curso: Ciência da Computação </h2>
                <h2> Cidade: Quixadá </h2>
            </div>
        )
    }
}
*/

class Questao02 extends Component{
    render() {
        const {nome, curso, cidade} = this.props
        return(
            <div>
                <h2> Nome:{nome} </h2>
                <h2> Curso: {curso} </h2>
                <h2> Cidade: {cidade} </h2>
            </div>
        )
    }
}

export default Questao02