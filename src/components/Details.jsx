import '../css/card.css'
import cover from '../cover.png';
const Details= ({ book })=>{
    <div className='detail'>
        <div>
            <img src={cover} alt="nothing" />
        </div>
        <div>
            <h1>{book.volumeInfo.title}</h1>
            <p>By {book.volumeInfo.authors}</p>
        </div>
    </div>
}