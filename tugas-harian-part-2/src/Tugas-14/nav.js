import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext} from "./themeContext";


const Nav = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return(
        <div className={`${theme}`}>

        <header>
        <nav>
            
        <ul>
            <li>
            <Link to="/"><p>Tugas 9</p></Link>
            </li>
            <li>
            <Link to="/tugas-10"><p>Tugas 10</p></Link>
            </li>
            <li>
            <Link to="/tugas-11"><p>Tugas 11</p></Link>
            </li>
            <li>
            <Link to="/tugas-12"><p>Tugas 12</p></Link>
            </li>
            <li>
            <Link to="/tugas-13"><p>Tugas 13</p></Link>
            </li>
            <li>
            <Link to="/tugas-14"><p>Tugas 14</p></Link>
            </li>
            <li>
            <Link to="/tugas-15"><p>Tugas 15</p></Link>
            </li>
            <li
            onClick={() =>{
                setTheme(theme ==='navbar-dark'?'navbar-light':'navbar-dark')
            }}><p className="btn-theme">Change Theme</p>
            </li>
        </ul>
    </nav>
    </header>
    </div>
    )
}

export default Nav