import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfessorTableRow from "./ProfessorTableRow";
//import { professors } from '../data.js'

function ListProfessor() {

    const [professors, setProfessors] = useState([])

    useEffect(
        () => {
            //axios.get("http://localhost:3001/students")
            axios.get("http://localhost:3002/crud/professors/list")
                .then(
                    (res) => {
                        setProfessors(res.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }
        ,
        []
    )

    function deleteProfessorById(_id){
        let professorsTemp = professors
        for(let i=0;i<professorsTemp.length;i++){
            if(professorsTemp[i]._id === _id){
                //console.log("1")
                professorsTemp.splice(i,1)
            }
        }
        setProfessors([...professorsTemp]) //deve-se criar um outro array para disparar o re-render
        //setFlag(!flag)
    }

    function generateTable() {
        if(!professors) return
        return professors.map(
            (professor,i) => {
                return <ProfessorTableRow professor={professor} key={i} deleteProfessorById={deleteProfessorById}/>
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



/*import * as React from "react";
import { Link } from "react-router-dom";

import ProfessorTableRow from "./ProfessorTableRow";
import { professors } from '../data.js'

function ListProfessor() {

    /*const professors = [
    {id:0, name: "John", university:"Johncity", degree:"Mestrado"},
    {id:1, name: "Carlos", university:"UECE", degree:"Doutorado"},
    {id:2, name: "Lucas", university:"UFC", degree:"Mestrado"},
    {id:3, name: "Marcos", university:"Unifor", degree:"Doutorado"},
]

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
*/
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