import React from "react";
import style from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={style.header} >
            <h1>Search movies</h1>
        </header>
    )
}

export default Header;