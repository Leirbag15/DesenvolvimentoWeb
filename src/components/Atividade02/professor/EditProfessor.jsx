import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//import { professors } from '../data.js'

function EditProfessor() {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const params = useParams()
    const navigate = useNavigate()
    useEffect(
        () => {
            
            axios.get('http://localhost:3002/crud/professors/retrieve/' + params.id)
                .then(
                    (res) => {
                        setName(res.data.name)
                        setUniversity(res.data.university)
                        setDegree(res.data.degree)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )

        }
        ,
        [params.id]
    )

        
    

    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedProfessor =
        {
            name, university, degree
        }
        //axios.put('http://localhost:3001/students/' + params.id, updatedProfessor)
        axios.put('http://localhost:3002/crud/professors/update/' + params.id, updatedProfessor)
            .then(
                res => {
                    //console.log(res.data)
                    //props.history.push('/listStudent');
                    //console.log(props)
                    navigate("/listProfessor")
                }
            )
            .catch(error => console.log(error))
    }
    

    return (
        <>
            <main>
                <h2>
                    Editar Professor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Universidade: </label>
                        <input type="text"
                            className="form-control"
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Degree: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? ""}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Professor" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditProfessor

/*
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { professors } from '../data.js'

function EditProfessor() {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const params = useParams()

    useEffect(
        () => {
            
            //console.log(params.id)
            const professor = professors[params.id]
            //console.log(professor)
            setName(professor.name)
            setUniversity(professor.university)
            setDegree(professor.degree)
        }
        ,
        [params.id]
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        console.log(university)
        console.log(degree)
    }

    return (
        <>
            <main>
                <h2>
                    Editar Professor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Universidade: </label>
                        <input type="text"
                            className="form-control"
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Degree: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? ""}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Professor" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditProfessor
*/

/*class EditProfessor extends React.Component{
  render(){
    return(
      <div>
      <h2>Editar Professor</h2>
      </div>
    )
  }
}
export default EditProfessor
*/