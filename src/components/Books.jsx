import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Books({ token, setNewReservedBook }) {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    async function getBooks() {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
        );
        const result = await response.json();
        console.log(result);
        setBooks(result.books);
      } catch (err) {
        console.error(err);
      }
    }
    getBooks();
  }, []);

  async function checkOut(id) {
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            available: false,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setNewReservedBook(result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {books &&
        books.map((book) => {
          return (
            <div key={book.id}>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <img src={book.coverimage} alt={book.title} />
              <Link to={`/books/${book.id}`}>
                <button>View Details</button>
              </Link>
              <button onClick={() => checkOut(book.id)}>Reserve Book</button>
            </div>
          );
        })}
    </>
  );
}
