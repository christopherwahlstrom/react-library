import { useState } from 'react'
import './App.scss'
import { Book, Borrow } from './models/data'
import jsonData from './data/json.json'

function App() {
	const [books, setBooks] = useState<Book[]>(jsonData.books)
	const [borrowList, setBorrowList] = useState<Borrow[]>([])

	const handleBorrowClick = (bookId: number) => {
		let borrow: Borrow = {
			borrowId: 1,  // TODO: fixa detta sen!
			bookId: bookId
		}
		let newBorrowList = [ ...borrowList, borrow ]
		setBorrowList(newBorrowList)
		// Tips: immer.js
	}
	const handleReturnClick = (bookId: number) => {
		let newBorrowList = borrowList.filter(borrow => borrow.bookId !== bookId)
		setBorrowList(newBorrowList)
	}

	return (
		<div id="app">
			<header>
				Bibblan
			</header>
			<main>
				<h1> Våra böcker </h1>
				<div className="book-grid">
					{books.map(book => (
						<section className="card" key={book.bookId}>
							<h3> {book.title} </h3>
							<img alt="bild" src={book.imageUrl} />
							<p> Författare: {book.author} </p>
							<div className="separator"></div>
							{borrowList.find(borrow => borrow.bookId === book.bookId)
								? <button className="return" onClick={() => handleReturnClick(book.bookId)}> Återlämna </button>
								: <button onClick={() => handleBorrowClick(book.bookId)}> Låna </button>
							}
						</section>
					))}
				</div>
			</main>
			<footer>
				Kontakta oss
			</footer>
		</div>
	)
}

export default App