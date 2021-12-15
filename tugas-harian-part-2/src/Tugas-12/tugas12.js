import React, { useState, useEffect } from "react";
import "./tugas12.css"
import axios from "axios";

const Tugas12 = () => {

// ----------State-------
const[dataMahasiswa, setDataMahasiswa] = useState([])
const[input, setInput] =  useState({
    name:"",
    course:"",
    score:""
})
const[fetchStatus, setFetchStatus] =  useState(true)
const [currentId, setCurrentId] =  useState(-1)
// --------State-----------

// Tugas 11 Sudah di Edit Jadi Bisa hore

// ---------Function---------

useEffect(() =>{
    const getData = async () => {
        let hasil = await axios.get(` http://backendexample.sanbercloud.com/api/student-scores`)
        setDataMahasiswa(hasil.data.map((e) =>{
        let{
            course,
            id,
            name,
            score
        } = e    
            return{
                id : id,
                name : name,
                course : course,
                score : score,
            }
        }))
    }
    if(fetchStatus){
        getData()
        setFetchStatus(false)
    }
}, [fetchStatus, setFetchStatus])

const getScore = (nilai) => {
    if(nilai >= 80){
        return "A"
    } else if(nilai >=70 && nilai < 80){
        return "B"
    } else if(nilai >=60 && nilai < 70){
        return "C"
    } else if(nilai >=50 && nilai < 60){
        return "D"
    } else {
        return "E"
    } 
}
// console.log(currentId)

const handleChange = (e) =>{
    let value = e.target.value
    let nameInputed = e.target.name

    setInput({...input, [nameInputed] : value})
}

const handleSubmit =(e) =>{
    e.preventDefault()

    let {name, course, score} = input
    if(currentId === -1){
        axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {
            name, course, score})
            .then((e) => {
            setFetchStatus(true)
        })
    } else {
        axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {
            name, course, score})
            .then((e) =>{
            setFetchStatus(true)
            })
    }
    setCurrentId(-1)
    setInput({
        name:"",
        course:"",
        score:"",
    })
}

const handleDelete = (e) => {
    let dataId = parseInt(e.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${dataId}`)
    .then((e) => {
        setFetchStatus(true)
    })
}

const handleEdit = (e) => {
    let dataId = parseInt(e.target.value)
    axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${dataId}`)
    .then((e) =>{
        let data = e.data
        setInput({
            name:data.name,
            course:data.course,
            score:data.score,
        })
    })
    setCurrentId(dataId)
}

// ---------Function---------

return (
<div className="list">
<h1>Daftar Nilai Mahasiswa</h1>
<table class="styled-table">
    <thead>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        {dataMahasiswa !== null && (
            <>
            {dataMahasiswa.map((e, index) =>{
                return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{e.name}</td>
                    <td>{e.course}</td>
                    <td>{e.score}</td>
                    <td>{getScore(e.score)}</td>
                    <td>
                        <button className="btn-edit" value={e.id} onClick={handleEdit}>Edit</button>
                        <button className="btn-delete" value={e.id} onClick={handleDelete}>Delete</button>  
                    </td>
                </tr>
                )
            })}
            </>
        )}
    </tbody>
</table>

<div>
  <h1>Form Nilai Mahasiswa</h1>
  <form onSubmit={handleSubmit} className="form-input">
    <label>Nama</label>
    <input value={input.name} onChange={handleChange} 
    type="text" name="name" required/>

    <label>Mata Kuliah</label>
    <input value={input.course} onChange={handleChange} 
    type="text" name="course" required/>

    <label>Nilai</label>
    <input value={input.score} onChange={handleChange} min={0} max={100}
    type="text" name="score" required/>

    <input type="submit" value="Submit"/>
  </form>
</div>

</div>
  );
}

export default Tugas12;