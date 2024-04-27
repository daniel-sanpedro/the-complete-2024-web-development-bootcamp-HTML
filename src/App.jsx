import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <Link to="/"> Home </Link>
      <Link to="/register"> Register </Link>
      <Link to="/account"> Account </Link>

      <Routes>
        <Route path="/books/:bookID" element={<SingleBook />} />
      </Routes>
    </>
  );
}

export default App;
