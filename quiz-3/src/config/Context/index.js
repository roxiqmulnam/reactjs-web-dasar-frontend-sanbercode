import axios from "axios"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router"
import { message } from 'antd';
import 'antd/dist/antd.css';

export const Context= createContext()

export const Provider = props => {
    let history = useHistory()
    const [dataGame, setDataGame] = useState([])
    const [input, setInput] = useState({
        name: "",
        description: "",
        category: "",
        release_year: 0,
        size: 0,
        price: 0,
        rating: 0,
        image_url:""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)


    const fetchData = async () => {
        let result = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
        let data = result.data
        console.log(data)
        setDataGame(data.map((e, index) => {
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

    const fetchById = async (idList) => {
        let res = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${idList}`)
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
            setDataGame([...dataGame, {
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
            let newDataListGame = dataGame.find((e) => e.id === currentId)
            newDataListGame.name = input.name
            newDataListGame.category = input.category
            newDataListGame.description = input.description
            newDataListGame.release_year = input.release_year
            newDataListGame.size = input.size
            newDataListGame.price = input.price
            newDataListGame.rating = input.rating
            newDataListGame.image_url = input.image_url
            setDataGame([...dataGame])
            history.push(`/mobile-list`)
            message.success('Berhasil mengupdate data')
        })
    }

    const functionDelete = (idListGame) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${idListGame}`)
            .then(() => {
                let newDataListGame = dataGame.filter((res) => { return res.id !== idListGame })
                setDataGame(newDataListGame)
                message.success('Berhasil menghapus data')
            })
    }

        const functionEdit = (e) => {
        }

    const functions = {
        fetchData, functionSubmit,functionUpdate,functionDelete,functionEdit,fetchById
    }

    return (
        <Context.Provider value={{
            dataGame,
            setDataGame,
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
