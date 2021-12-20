import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../config/Context'
import './index.css'

const Home = () => {
    const { input, setInput, dataMahasiswa, functions, fetchStatus, setFetchStatus } = useContext(Context)
    const { fetchData, getScore,  functionDelete, functionUpdate, functionEdit } = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])

    return(
    <div className="main-container">
        <h1>Popular Mobile Apps</h1>
                    <>
                    {dataMahasiswa.map((e) =>{
                        return(
                        <div>
                        <p key={e.id}></p>
                            <p><strong>{e.name}</strong></p>
                            <p><strong>Release Year : {e.release_year}</strong></p>
                            <p><strong>{e.image_url}</strong></p>
                            <p><strong>Price : {e.price}</strong></p>
                            <p><strong>Rating : {e.rating}</strong></p>
                            <p><strong>Size : {e.size}</strong></p>
                            <p>Platform :</p>
                            <p><strong>Description : {e.description}</strong></p>
                            <hr/>
                        </div>
                        )
                    })}
                    </>
    </div>
    );
  }


export default Home
