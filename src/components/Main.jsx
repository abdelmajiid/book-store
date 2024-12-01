import Header from "./Header";
import Content from "./Content";
import { useEffect, useState } from 'react';
function Main(){
    const [books, setBooks] = useState([]) 
    
    const API_KEY = "AIzaSyA3ye6qhNGsix8gjY_bjOqLvBdixXFV70U"
    const API_URL = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}`
    // const [search, setSearch] = useState("")
    const searchBooks = async(title) => {
        const response = await fetch(`${API_URL}&q=${title}&maxResults=40&orderBy=newest`)
        const data = await response.json();
        setBooks(data.items) 
    }
    const term = ''


    const handleChildData = (dataFromChild) => {
        console.log(dataFromChild)
        searchBooks(dataFromChild); // Update the state with the data received from child
      };

    console.log(books)

    useEffect(() => {
        searchBooks(term) 
        
    },[]);
    return( 
        <>
            <Header sendDataToParent={handleChildData} />
            <Content books={books}/>
        </>
    )
}
export default Main;