import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { DataContext } from "./dataContext"

const DataList = () => {
    let history = useHistory()


    const { input, setInput, dataMahasiswa, functions, fetchStatus, setFetchStatus } = useContext(DataContext)
    const { fetchData, getScore,  functionDelete, functionUpdate, functionEdit } = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])



    const handleDelete = (event) => {
        let idMahasiswa = parseInt(event.target.value)

        functionDelete(idMahasiswa)
    }

    const handleEdit = (event) => {
        let idMahasiswa = parseInt(event.target.value)
        history.push(`/tugas-14/edit/${idMahasiswa}`)
        // functionUpdate(idMahasiswa)
    }

    const handleCreate = () => {
        history.push('/tugas-14/create')
        setInput({
            nama: "",
            course: "",
            score: 0
        })
    }

    return (
        <div className="list">
        <h1>Daftar Nilai Mahasiswa</h1>
        <h6>Use Context</h6>
        <table className="styled-table">
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
        <button className="btn-create" onClick={handleCreate} >Tambah Data Nilai Mahasiswa</button>
    </div>
    )
}

export default DataList
