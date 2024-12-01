import React from 'react';
import { useState } from 'react';
import '../css/header.css';



const Header = ({ sendDataToParent })=>{
    
    const[searchTerm, setSearchTerm] = useState("")

    const buttonRef = React.useRef(null);

    // Handle the key press
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
        buttonRef.current.click(); // Programmatically click the button when "Enter" is pressed
        }
    };
    
    return( 
        <>
            <nav>
                <h1>FARAH BOOK STORE</h1>                
            </nav>
            <div>
                <input
                    placeholder="Enter your book's name"
                    value={searchTerm} 
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button
                ref={buttonRef}
                onClick={()=>sendDataToParent(searchTerm)}>
                    Search
                </button>
            </div>

</>
    )
}
export default Header;