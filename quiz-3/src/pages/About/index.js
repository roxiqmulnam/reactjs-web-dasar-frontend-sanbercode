import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
        <div>
        <h1>Data Peserta Sanbercode Bootcamp Reactjs</h1>
        <ol>
            <li><b>Nama:</b> Roxiq Mulna Muhammad</li>
            <li><b>Email:</b> roxiqmm@gmail.com</li>
            <li><b>Sistem Operasi yang digunakan:</b> Windows 10</li>
            <li><b>Akun Gitlab:</b> roxiqmulnam</li>
            <li><b>Akun Telegram:</b> @roxiqmulnam</li>
        </ol>
    
        
        </div>
        <Link to="/">
            <button className='btn-back'>Go to Home</button>
        </Link>
        </div>
    )
}

export default About
