import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {

	const { bookId } = useParams();
	const data = useLoaderData();
	const id = parseInt(bookId);

	const book = data.find(book => book.bookId === id)

	const {bookId: currentBookId, image} = book;
	// console.log(book);

	// console.log(bookId);
	// console.log(typeof bookId, typeof id, typeof data[0].bookId);

	return (
		<div className="my-12" >
			<h2>Book Details: {bookId} </h2>
			<img className="w-36" src={image} alt="" />
			<br />
			<button className="btn-outline mr-4 btn-accent">Read</button>
			<button className="btn-accent">WishList</button>
		</div>
	);
};

export default BookDetail;