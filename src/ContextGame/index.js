import axios from "axios"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router"
import { message } from 'antd';

export const GameContext = createContext()

export const GameProvider = props => {
    let history = useHistory()
    const [listGame, setlistGame] = useState([])
    const [input, setInput] = useState({
        genre: "",
        image_url: "",
        singlePlayer: "",
        multiplayer: "",
        name: "",
        platform: "",
        release: "",
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)


    const fetchData = async () => {
        let result = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)
        let data = result.data
        console.log(data)
        setlistGame(data.map((e, index) => {
            return {
                no: index+1,
                id: e.id,
                genre: e.genre,
                image_url: e.image_url,
                singlePlayer: e.singlePlayer,
                multiplayer: e.multiplayer,
                name: e.name,
                platform: e.platform,
                release: e.release
            }
        }))
    }

    const fetchById = async (idGame) => {
        let res = await axios.get(`https://backendexample.sanbersy.com/api/data-game/${idGame}`)
        let data = res.data
        setInput({
            id: data.id,
            genre: data.genre,
            image_url: data.image_url,
            singlePlayer: data.singlePlayer,
            multiplayer: data.multiplayer,
            name: data.name,
            platform: data.platform,
            release: data.release
        })
        setCurrentId(data.id)
    }

    const functionSubmit = () => {
        axios.post(`https://backendexample.sanbersy.com/api/data-game`, {
            genre: input.genre,
            image_url: input.image_url,
            singlePlayer: input.singlePlayer,
            multiplayer: input.multiplayer,
            name: input.name,
            platform: input.platform,
            release: input.release
        }).then((res) => {
            let data = res.data
            setlistGame([...listGame, {
                genre: data.genre,
                image_url: data.image_url,
                singlePlayer: data.singlePlayer,
                multiplayer: data.multiplayer,
                name: data.name,
                platform: data.platform,
                release: data.release
            }])
            history.push('/list-game')
            message.success('Berhasil menambahkan data')
        })
    }

    const functionUpdate = (currentId) => {
        axios.put(`https://backendexample.sanbersy.com/api/data-game/${currentId}`, {
            genre: input.genre,
            image_url: input.image_url,
            singlePlayer: input.singlePlayer,
            multiplayer: input.multiplayer,
            name: input.name,
            platform: input.platform,
            release: input.release
        }).then((res) => {
            let newlistGame = listGame.find((e) => e.id === currentId)
            newlistGame.genre = input.genre
            newlistGame.image_url = input.image_url
            newlistGame.singlePlayer = input.singlePlayer
            newlistGame.multiplayer = input.multiplayer
            newlistGame.name = input.name
            newlistGame.platform = input.platform
            newlistGame.release = input.release
            setlistGame([...listGame])
            history.push(`/list-game`)
            message.success('Berhasil mengupdate data')
        })
    }

    const functionDelete = (idGame) => {
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${idGame}`)
            .then(() => {
                let newlistGame = listGame.filter((res) => { return res.id !== idGame })
                setlistGame(newlistGame)
                message.success('Berhasil menghapus data')
            })
    }

        const functionEdit = (e) => {
        }

    const functions = {
        fetchData,
        functionSubmit,
        functionUpdate,
        functionDelete,
        functionEdit,
        fetchById
    }

    return (
        <GameContext.Provider value={{
            listGame,
            setlistGame,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </GameContext.Provider>
    )

}
