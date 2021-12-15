import React, { useEffect, useState } from "react";

const Tugas10 = () => {
    
    const [count, setCount] = useState(100)
    const [display, setDisplay] = useState(true)
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        if(count !== 0){
        setTimeout(() => {
                setCount(count - 1)
            }, 1000);
        } 
        if(count === 0){
            setDisplay(false)
        }
    }, [count])

        setTimeout(() => {
        setCurrentTime(new Date().toLocaleTimeString())
    });


    return(
        <>
        {display ?
        <div className="tugas10">
            <h1>Now At : {currentTime} </h1>
            <p><strong>Countdown : {count}</strong></p>
        </div> : null}
        </>
    )
}

export default Tugas10;