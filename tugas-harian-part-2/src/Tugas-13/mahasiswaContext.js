import React, { useState, createContext } from "react";
import axios from "axios";

export const MahasiswaContext = createContext()

export const MahasiswaProvider = (props) => {

  const[dataMahasiswa, setDataMahasiswa] = useState([])
  const[input, setInput] =  useState({
      name:"",
      course:"",
      score:""
  })

  const[fetchStatus, setFetchStatus] =  useState(true)
  const [currentId, setCurrentId] =  useState(-1)

  let combineState = {
    dataMahasiswa, setDataMahasiswa, input, setInput,
    fetchStatus, setFetchStatus, currentId, setCurrentId
  }

  const getData = async () => {
      let hasil = await axios.get(` http://backendexample.sanbercloud.com/api/student-scores`)
        setDataMahasiswa(hasil.data.map((e) =>{
          let{course, id, name, score} = e    
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

  const createData = (name, course, score) => {
    axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {
      name, course, score
    }).then(() => {
      setFetchStatus(true)
    })
  }

  const updateData = ({currentId, name, course, score}) => {
    axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {
      name, course, score})
      .then(() =>{
      setFetchStatus(true)
      })
  }


  const handleChange = (e) =>{
    let value = e.target.value
    let nameInputed = e.target.name

    setInput({...input, [nameInputed] : value})
}

  const handleSubmit =(e) =>{
      e.preventDefault()

      let {name, course, score} = input
      if(currentId === -1){
        createData(name, course, score)
      } else {
        updateData({currentId, name, course, score})
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
      .then(() => {
          setFetchStatus(true)
      })
      setInput({
        name:"",
        course:"",
        score:"",
      })
      setCurrentId(-1)
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

  let combineFunction = { getData, getScore, handleDelete, 
  handleEdit, handleSubmit, handleChange }

  return(
    <MahasiswaContext.Provider value={{combineState, combineFunction}}>
      {props.children}
    </MahasiswaContext.Provider>
  )
}