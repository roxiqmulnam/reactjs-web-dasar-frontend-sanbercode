import React, {useContext} from "react";
import { MahasiswaContext } from "./mahasiswaContext";

const MahasiswaForm = () => {
    const {combineState, combineFunction} = useContext(MahasiswaContext)

    const {input} = combineState
    const {handleSubmit, handleChange} = combineFunction


    return(
        <div className="list"> 
            <h1>Form Nilai Mahasiswa</h1>
            <form onSubmit={handleSubmit} className="form-input">
            <label>Nama</label>
            <input value={input.name} onChange={handleChange} 
            type="text" name="name" placeholder="Masukan Nama.." required/>

            <label>Mata Kuliah</label>
            <input value={input.course} onChange={handleChange} 
            type="text" name="course" placeholder="Masukan Mata Kuliah.." required/>

            <label>Nilai</label>
            <input value={input.score} onChange={handleChange} min={0} max={100}
            type="text" name="score" placeholder="Masukan Nilai.." required/>

            <input type="submit"/>
            </form>
        </div>
  )
}

export default MahasiswaForm;