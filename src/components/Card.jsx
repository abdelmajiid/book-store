import '../css/card.css'
import cover from '../cover.png';

const Card= ({ book })=>{
    
    return(
        <div className="card">
            <span>
                {book.volumeInfo.publishedDate
                    ?
                    ( book.volumeInfo.publishedDate.substring(0,4))
                    : 
                    ( <span>uknown Year</span> ) 
                } 
            </span>
             {book.volumeInfo.imageLinks
                ?
                (<img src={book.volumeInfo.imageLinks.smallThumbnail} alt="nothing" />)
                : 
                (<img src={cover} alt="nothing" />)
            } 
            <div className="bookData">
                <h3 className="title">{book.volumeInfo.title}</h3>        
                {book.volumeInfo.authors ? 
                    <p>By {book.volumeInfo.authors}</p>
                    :(<p>uknown author</p>)
                }
                
            </div> 
        </div>
        
    )
    }
export default Card; 