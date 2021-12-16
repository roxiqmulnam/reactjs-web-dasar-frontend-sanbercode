import React, {useContext} from "react";
import { MahasiswaContext } from "./mahasiswaContext";

const MahasiswaList = () => {
    const {combineState, combineFunction} = useContext(MahasiswaContext)

    const {dataMahasiswa} = combineState
    const {getScore, handleDelete, handleEdit} = combineFunction

    return(
    <div className="list">
        <h1>Daftar Nilai Mahasiswa</h1>
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
    </div>
  )
}

export default MahasiswaList