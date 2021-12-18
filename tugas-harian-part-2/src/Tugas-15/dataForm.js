import React, { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { DataContextnew } from "./dataContext"
import { Link } from "react-router-dom"

const DataFormNew = () => {
    const {input, setInput, currentId, setCurrentId, functions } = useContext(DataContextnew)
    const { functionSubmit, functionUpdate,fetchById  } = functions
    let {Value} = useParams()

    useEffect(() => {
        if( Value !== undefined ){
            fetchById(Value)
        }
    },[])


    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({ ...input, [name]: typeOfValue })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)

        if (currentId === -1) {
            functionSubmit()
        } else {
            functionUpdate(currentId)
        }

        setInput({
            nama: "",
            course: "",
            score: 0
        })
        setCurrentId(-1)
    }

    return (
        <div className="list"> 
            <h1>Form Nilai Mahasiswa</h1>
            <form method="post" onSubmit={handleSubmit} className="form-input">
            <label>Nama</label>
            <input value={input.nama} onChange={handleChange} 
            type="text" name="nama" placeholder="Masukan Nama.." required/>

            <label>Mata Kuliah</label>
            <input value={input.course} onChange={handleChange} 
            type="text" name="course" placeholder="Masukan Mata Kuliah.." required/>

            <label>Nilai</label>
            <input value={input.score} onChange={handleChange} min={0} max={100}
            type="text" name="score" placeholder="Masukan Nilai.." required/>

            <input type="submit"/>
            
            </form>
            <Link to="/tugas-15">
            <button className='btn-back'>Kembali</button>
            </Link>

        </div>
    )
}

export default DataFormNew
