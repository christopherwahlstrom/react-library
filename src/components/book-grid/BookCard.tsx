import { Book, Borrow } from '../../models/data'

interface Props {
    book: Book;
    borrowList: Borrow[]; // Props drilling
    handleReturnClick: (bookId: number) => void;
    handleBorrowClick: (bookId: number) => void;
}

const BookCard = ({book, borrowList, handleReturnClick, handleBorrowClick}: Props) => {
    return (
        <section className="card" key={book.bookId}>
                  <h3> {book.title} </h3>
                  <img alt="bild" src={book.imageUrl} />
                  <p>Författare: {book.author} </p>
                  <div className='separator'></div>
                  {borrowList.find(borrow => borrow.bookId === book.bookId)
                    ? <button className='return' onClick={() => handleReturnClick(book.bookId)}>Återlämna</button>
                    : <button onClick={() => handleBorrowClick(book.bookId)}> Låna </button>
                  }
                </section>
    )
}

export default BookCard;