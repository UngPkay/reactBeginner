import React from 'react'
import Naviation from './Navigation';

function Header(){
    return(
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold">
                AppName
            </span>           
            <Naviation/>
        </header>
    )
}

export default Header;