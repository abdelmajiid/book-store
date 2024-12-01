import '../css/content.css';
import Card from "./Card";
function Content({ books }){
    return(
        <div className='content'>
            {books?.length > 0
            ?(
                books.map((book)=>(
                    <Card book = {book}/>
                ))
                
            ):(
                <h2>No books found</h2>
            )}
            
        </div>
    
    )
}
export default Content;