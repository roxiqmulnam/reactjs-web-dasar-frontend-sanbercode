import React, { useState } from "react";
import "./tugas11.css"

const Tugas11 = () => {

// ----------State-------
const[dataBuah, setDataBuah] = useState([
    {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
    {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
    {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
    {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
  ])

const[input, setInput] = useState({
    nama : "",
    hargaTotal: "",
    beratTotal: "",
  })

const [currentIndex, setCurrentIndex] = useState(-1)

// --------State-----------

console.log(currentIndex)

// ---------Function---------
const handleChange = (e) =>{
    let value = e.target.value
    let name = e.target.name

    setInput({...input, [name] : value})
}

const handleSubmit =(e) =>{
    e.preventDefault()

    let {nama, hargaTotal, beratTotal} = input
    let newBuah = dataBuah
    if (currentIndex === -1) {
        newBuah = [...dataBuah, {nama, hargaTotal, beratTotal}]
      } else {
        newBuah[currentIndex] = input
       }
    setCurrentIndex(-1)   
    setDataBuah(newBuah)
    setInput({
        nama:"",
        hargaTotal:"",
        beratTotal:"",
    })

}

const handleDelete = (e) => {
    let value = (e.target.value)
    let dataDelete = dataBuah[value]
    let newBuah = dataBuah.filter((e) =>{
        return e !== dataDelete
    })
    setDataBuah(newBuah)
}

const handleEdit = (e) => {
    let index = parseInt(e.target.value)
    let editValue = dataBuah[index]
    setInput(editValue)
    setCurrentIndex(index)
}

// ---------Function---------

return (
<div className="list">
<h1>Daftar Harga Buah</h1>
<table class="styled-table">
    <thead>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga per KG</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        {dataBuah !== null && (
            <>
            {dataBuah.map((e, index) =>{
                return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{e.nama}</td>
                    <td>{e.hargaTotal}</td>
                    <td>{e.beratTotal/1000} kg</td>
                    <td>Rp. {e.hargaTotal/(e.beratTotal/1000)}</td>
                    <td>
                        <button className="btn-edit" value={index} onClick={handleEdit}>Edit</button>
                        <button className="btn-delete" value={index} onClick={handleDelete}>Delete</button>  
                    </td>
                </tr>
                )
            })}
            </>
        )}
    </tbody>
</table>

<div>
  <h1>Form Daftar Harga Buah</h1>
  <form onSubmit={handleSubmit} className="form-input">
    <label>Nama</label>
    <input value={input.nama} onChange={handleChange} 
    type="text" name="nama" placeholder="Tambah Nama Buah.." required/>

    <label>Harga Total</label>
    <input value={input.hargaTotal} onChange={handleChange} 
    type="text" name="hargaTotal" placeholder="Masukan Harga Total.." required/>

    <label>Berat Total (dalam gram)</label>
    <input value={input.beratTotal} onChange={handleChange} 
    type="text" name="beratTotal" placeholder="Masukan Berat.." required/>

    <input type="submit" value="Submit"/>
  </form>
</div>

</div>
  );
}

export default Tugas11;