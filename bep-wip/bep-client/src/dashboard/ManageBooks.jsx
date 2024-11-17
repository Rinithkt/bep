import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
    setIsLoading(true); 
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => {
      setAllBooks(data)
      setIsLoading(false)
    });

  }, [])

//  delete a books
  const handleDelete = (id) => {
    setIsLoading(true); // Show loading state during delete operation
    console.log(id);
  
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged && data.deletedCount > 0) {
          alert("Book is deleted successfully!");
          console.log("Data after delete", data);
  
          // Filter out the deleted book
          setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
        } else {
          alert("Failed to delete the book.");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
        alert("An error occurred while deleting the book.");
        setIsLoading(false);
      });
  };

   if(isLoading) return <div className='h-screen w-full flex items-center justify-center'>loading...</div>


   console.log("All books ", allBooks.length)

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
      
      { /* table for book data */ }
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        { /*  Fetch data from MongoDB Database */ }
          {
            allBooks.length > 0 &&
            allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.title}
            </Table.Cell>
            <Table.Cell>
              {book.author_name}
            </Table.Cell>
            <Table.Cell>
              {book.category}
            </Table.Cell>
            <Table.Cell>
              $5.00
            </Table.Cell>
            <Table.Cell>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" 
              to={`/admin/dashboard/edit-books/${book?._id}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(book?._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button> 
            </Table.Cell>
          </Table.Row>
            </Table.Body> )
          }

        </Table>
    </div>
  )
}

export default ManageBooks;