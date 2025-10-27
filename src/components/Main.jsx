import Header from "./Header";
import Content from "./Content";
import { useEffect, useState } from 'react';
function Main(){
    const [books, setBooks] = useState([]) 
    
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}`
    // const [search, setSearch] = useState("")
    const searchBooks = async(title) => {
        const showOfflineBanner = () => {
            let banner = document.getElementById('offline-banner');
            if (!banner) {
            banner = document.createElement('div');
            banner.id = 'offline-banner';
            banner.textContent = 'No internet connection. Please check your network.';
            Object.assign(banner.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                padding: '10px',
                background: '#ffcc00',
                color: '#000',
                textAlign: 'center',
                zIndex: '9999',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            });
            document.body.appendChild(banner);
            } else {
            banner.style.display = 'block';
            }
        };

        const hideOfflineBanner = () => {
            const banner = document.getElementById('offline-banner');
            if (banner) banner.style.display = 'none';
        };

        try {
            if (!navigator.onLine) {
            showOfflineBanner();
            setBooks([]); // clear books when offline
            return;
            }
            hideOfflineBanner();

            const response = await fetch(`${API_URL}&q=${title}&maxResults=40&orderBy=newest`);
            if (!response.ok) {
            // non-network error (e.g. 4xx/5xx) — hide offline banner if present
            hideOfflineBanner();
            console.error('Network response was not ok:', response.statusText);
            setBooks([]);
            return;
            }
            const data = await response.json();
            setBooks(data.items || []); // Added fallback to empty array if data.items is undefined
        } catch (error) {
            console.error('Error fetching books:', error);
            // If navigator reports offline, show banner; otherwise hide it
            if (!navigator.onLine) {
            showOfflineBanner();
            } else {
            hideOfflineBanner();
            }
            setBooks([]); // Set empty array in case of error
        }
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