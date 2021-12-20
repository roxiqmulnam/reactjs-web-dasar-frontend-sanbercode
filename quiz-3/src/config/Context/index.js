import axios from "axios"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router"
import { message } from 'antd';
import 'antd/dist/antd.css';

export const Context= createContext()

export const Provider = props => {
    let history = useHistory()
    const [dataMahasiswa, setDataMahasiswa] = useState([])
    const [input, setInput] = useState({
        name: "",
        description: "",
        category: "",
        release_year: 0,
        size: 0,
        price: 0,
        rating: 0,
        imgUrl:""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)


    const fetchData = async () => {
        let result = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
        let data = result.data
        console.log(data)
        setDataMahasiswa(data.map((e, index) => {
            let indexScore = getScore(e.score)
            return {
                no: index+1,
                id: e.id,
                name: e.name,
                description: e.description,
                category: e.category,
                release_year: e.release_year,
                size: e.size,
                price: e.price,
                rating: e.rating,
                image_url :e.image_url
            }
        }))
    }

    const fetchById = async (idMahasiswa) => {
        let res = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${idMahasiswa}`)
        let data = res.data
        setInput({
            id: data.id,
            name: data.name,
            description: data.description,
            category: data.category,
            release_year: data.release_year,
            size:data.size,
            price: data.price,
            rating: data.rating,
            image_url : data.image_url
        })
        setCurrentId(data.id)
    }

    const getScore = (score) => {
        if (score >= 80) {
            return "A"
        } else if (score >= 70 && score < 80) {
            return "B"
        } else if (score >= 60 && score < 70) {
            return "C"
        } else if (score >= 50 && score < 60) {
            return "D"
        } else {
            return "E"
        }
    }

    const functionSubmit = () => {
        axios.post(`http://backendexample.sanbercloud.com/api/mobile-apps`, {
            name: input.name,
            category: input.category,
            description: input.description,
            release_year:input.release_year,
            size:input.size,
            price: input.price,
            rating: input.rating,
            image_url : input.image_url
        }).then((res) => {
            let data = res.data
            setDataMahasiswa([...dataMahasiswa, {
                id: data.id,
                name: data.name,
                description:data.description,
                category: data.category,
                release_year: data.release_year,
                size:data.size,
                price: data.price,
                rating: data.rating,
                image_url : data.image_url
            }])
            history.push('/mobile-list')
            message.success('Berhasil menambahkan data')
        })
    }

    const functionUpdate = (currentId) => {
        axios.put(`http://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, {
            name: input.name,
            category: input.category,
            description: input.description,
            release_year: input.release_year,
            size:input.size,
            price: input.price,
            rating: input.rating,
            image_url : input.image_url
        }).then((res) => {
            let newDataMahasiswa = dataMahasiswa.find((e) => e.id === currentId)
            newDataMahasiswa.name = input.name
            newDataMahasiswa.category = input.category
            newDataMahasiswa.description = input.description
            newDataMahasiswa.release_year = input.release_year
            newDataMahasiswa.size = input.size
            newDataMahasiswa.price = input.price
            newDataMahasiswa.rating = input.rating
            newDataMahasiswa.image_url = input.image_url
            setDataMahasiswa([...dataMahasiswa])
            history.push(`/mobile-list`)
            message.success('Berhasil mengupdate data')
        })
    }

    const functionDelete = (idMahasiswa) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${idMahasiswa}`)
            .then(() => {
                let newDataMahasiswa = dataMahasiswa.filter((res) => { return res.id !== idMahasiswa })
                setDataMahasiswa(newDataMahasiswa)
                message.success('Berhasil menghapus data')
            })
    }

        const functionEdit = (e) => {
        }

    const functions = {
        fetchData,
        getScore,
        functionSubmit,
        functionUpdate,
        functionDelete,
        functionEdit,
        fetchById
    }

    return (
        <Context.Provider value={{
            dataMahasiswa,
            setDataMahasiswa,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </Context.Provider>
    )

}
