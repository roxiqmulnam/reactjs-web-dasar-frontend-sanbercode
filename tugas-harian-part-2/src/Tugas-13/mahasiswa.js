import React from "react";
import { MahasiswaProvider } from "./mahasiswaContext";
import MahasiswaForm from "./mahasiswaForm";
import MahasiswaList from "./mahasiswaList";


export const Tugas13 = () => {
  return(
    <MahasiswaProvider>
        <MahasiswaList />
        <MahasiswaForm />
    </MahasiswaProvider>
  )
}

export default Tugas13;