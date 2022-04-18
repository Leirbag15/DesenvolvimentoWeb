
import * as React from "react";
import { Link } from "react-router-dom";

import ProfessorTableRow from "./ProfessorTableRow";
import { professors } from '../data.js'

function ListProfessor() {

    /*const professors = [
    {id:0, name: "John", university:"Johncity", degree:"Mestrado"},
    {id:1, name: "Carlos", university:"UECE", degree:"Doutorado"},
    {id:2, name: "Lucas", university:"UFC", degree:"Mestrado"},
    {id:3, name: "Marcos", university:"Unifor", degree:"Doutorado"},
]*/

    function generateTable() {
        if(!professors) return
        return professors.map(
            (professor,i) => {
                return <ProfessorTableRow professor={professor} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    List Professor
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Universidade</th>
                            <th>Titulação</th>
                            <th colSpan={2} style={{textAlign:"center"}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default ListProfessor

/*
import React from 'react'

class ListProfessor extends React.Component{
  render(){
    return(
      <div>
      <h2>Listar Professor</h2>
      </div>
    )
  }
}
export default ListProfessor
*/