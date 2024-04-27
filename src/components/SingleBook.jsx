/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */ import { useParams } from "react-router-dom";

export default function SingleBook() {
  let { bookID } = useParams();
  // let {bookTitle} = useParams()
  return (
    <>
      <p>Book Id is {bookID}</p>
      {/* <p>Book Title is {bookTitle}</p> */}
    </>
  );
}
