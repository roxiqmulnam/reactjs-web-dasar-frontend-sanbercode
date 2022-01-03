import axios from "axios"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router"
import { message } from 'antd';

export const MovieContext = createContext()

export const MovieProvider = props => {
    let history = useHistory()
    const [listMovie, setlistMovie] = useState([])
    const [input, setInput] = useState({
        description: "",
        duration: "",
        genre: "",
        image_url: "",
        rating: "",
        review: "",
        title: "",
        year: "",
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)


    const fetchData = async () => {
        let result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
        let data = result.data
        console.log(data)
        setlistMovie(data.map((e, index) => {
            return {
                no: index+1,
                id: e.id,
                description: e.description,
                duration: e.duration,
                genre: e.genre,
                image_url: e.image_url,
                rating:e.rating,
                review:e.review,
                title:e.title,
                year:e.year
            }
        }))
    }

    const fetchById = async (idMovie) => {
        let res = await axios.get(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`)
        let data = res.data
        setInput({
            id: data.id,
            description: data.description,
            duration: data.duration,
            genre: data.genre,
            image_url: data.image_url,
            rating:data.rating,
            review:data.review,
            title:data.title,
            year:data.year
        })
        setCurrentId(data.id)
    }


    const functionSubmit = () => {
        axios.post(`https://backendexample.sanbersy.com/api/data-movie`, {
            description: input.description,
            duration: input.duration,
            genre: input.genre,
            image_url: input.image_url,
            rating:input.rating,
            review:input.review,
            title:input.title,
            year:input.year
        }).then((res) => {
            let data = res.data
            setlistMovie([...listMovie, {
                id: data.id,
                description: data.description,
                duration: data.duration,
                genre: data.genre,
                image_url: data.image_url,
                rating:data.rating,
                review:data.review,
                title:data.title,
                year:data.year
            }])
            history.push('/list-movie')
            message.success('Berhasil menambahkan data')
        })
    }

    const functionUpdate = (currentId) => {
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${currentId}`, {
            description: input.description,
            duration: input.duration,
            genre: input.genre,
            image_url: input.image_url,
            rating:input.rating,
            review:input.review,
            title:input.title,
            year:input.year
        }).then((res) => {
            let newlistMovie = listMovie.find((e) => e.id === currentId)
            newlistMovie.description =  input.description
            newlistMovie.duration =  input.duration
            newlistMovie.genre =  input.genre
            newlistMovie.image_url =  input.image_url
            newlistMovie.rating = input.rating
            newlistMovie.review = input.review
            newlistMovie.title = input.title
            newlistMovie.year = input.year
            setlistMovie([...listMovie])
            history.push(`/list-movie`)
            message.success('Berhasil mengupdate data')
        })
    }

    const functionDelete = (idMovie) => {
        axios.delete(`https://backendexample.sanbersy.com/api/data-Movie/${idMovie}`)
            .then(() => {
                let newlistMovie = listMovie.filter((res) => { return res.id !== idMovie })
                setlistMovie(newlistMovie)
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
        <MovieContext.Provider value={{
            listMovie,
            setlistMovie,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </MovieContext.Provider>
    )

}
