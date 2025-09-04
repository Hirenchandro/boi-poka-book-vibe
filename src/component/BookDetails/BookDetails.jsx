import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  // console.log(id, book);
  const { bookName, image } = book;
  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  return (
    <div className="my-12">
      <h1>Book details Here. Name: {bookName} </h1>
      <img className="w-36" src={image} alt="" />
      <br />
      <button
        onClick={() => handleMarkAsRead(bookId)}
        className="btn btn-outline mr-4 btn-accent"
      >
        Mark As Read
      </button>
      <button className="btn btn-accent">WishList</button>
    </div>
  );
};

export default BookDetails;
