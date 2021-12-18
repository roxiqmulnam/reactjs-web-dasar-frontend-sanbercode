import React from 'react'
import { Link } from 'react-router-dom'
import { MahasiswaProvider } from '../Tugas-13/mahasiswaContext'
import MahasiswaList from '../Tugas-13/mahasiswaList'
import { DataProvider } from './dataContext'

const CreateData = () => {

    return (
        <div>
            <DataProvider>
            <MahasiswaProvider>
            <MahasiswaList />
            </MahasiswaProvider>
            </DataProvider>
            <Link to="/create">
            <button className='btn-create'>Buat Data Nilai Mahasiswa Baru</button>
            </Link>

        </div>
    )
}



export default CreateData
