//DarkModeButton.jsx

import React from 'react';


export const DarkModeButton = () => {
    const [darkMode, setDarkMode] = React.useState(true);


    const handleClick = () => {
        // body and body.light are classes in public\index.html
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
        setDarkMode(!darkMode);
    }


    return (
        <div
        className='noselect flex items-center justify-between gap-2'
        >
            <p>Dark</p>
            <label className="switch">
                <input onClick={handleClick} type="checkbox"></input>
                <span className="slider"></span>
            </label>
            <p>Ligth</p>
        </div>
    );
}
