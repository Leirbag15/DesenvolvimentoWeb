import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import StudentTableRow from "./StudentTableRow";
//import { students } from './data.js'

function ListStudent() {

    const [students, setStudents] = useState([])

    useEffect(
        () => {
            //axios.get("http://localhost:3001/students")
            axios.get("http://localhost:3002/crud/students/list")
                .then(
                    (res) => {
                        setStudents(res.data)
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

    function deleteStudentById(_id){
        let studentsTemp = students
        for(let i=0;i<studentsTemp.length;i++){
            if(studentsTemp[i]._id === _id){
                //console.log("1")
                studentsTemp.splice(i,1)
            }
        }
        setStudents([...studentsTemp]) //deve-se criar um outro array para disparar o re-render
        //setFlag(!flag)
    }

    function generateTable() {

        if (!students) return
        return students.map(
            (student, i) => {
                return <StudentTableRow student={student} key={i} deleteStudentById={deleteStudentById}/>
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Estudantes
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan={2} style={{ textAlign: "center" }}></th>
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

export default ListStudent

/*import * as React from "react";
import { Link } from "react-router-dom";

import StudentTableRow from "./StudentTableRow";
import { students } from '../data.js'

function ListStudent() {

    const students = [
        {id:0, name:"Jefferson de Carvalho", course: "Sistemas de Informação",ira:6.7},
        {id:1, name:"Jefferson de Carvalho", course: "Sistemas de Informação",ira:6.7},
        {id:2, name:"Jefferson de Carvalho", course: "Sistemas de Informação",ira:6.7},
        {id:3, name:"Jefferson de Carvalho", course: "Sistemas de Informação",ira:6.7}
    ]

    function generateTable() {
        if(!students) return
        return students.map(
            (student,i) => {
                return <StudentTableRow student={student} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    List Student
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
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

export default ListStudent
*/