import React from 'react';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>To-Do List</h1>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10 px',
    textAlign: 'center'
}

export default Header;