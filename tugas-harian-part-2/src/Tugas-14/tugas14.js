import React from 'react'
import { DataProvider } from './dataContext'
import CreateData from './createData'
import { ThemeProvider } from './themeContext'

const Tugas14 = () => {
    return (
        <DataProvider>
        <ThemeProvider>
        <CreateData />
        </ThemeProvider>
        </DataProvider>
    )
}

export default Tugas14