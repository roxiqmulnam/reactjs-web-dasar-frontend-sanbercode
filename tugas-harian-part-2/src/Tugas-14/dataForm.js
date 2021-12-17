import React from 'react'
import { Link } from 'react-router-dom';
import { MahasiswaProvider } from '../Tugas-13/mahasiswaContext';
import { DataProvider } from './dataContext'

import DataList from './DataList';

const DataForm = () => {
    return (
        <div>
        <MahasiswaProvider>
        <DataProvider>
        <DataList />
        </DataProvider>
        </MahasiswaProvider>
        <Link to="tugas-14">
            <button className='btn-back'>Kembali</button>
        </Link>
        </div>

    )
}

export default DataForm
