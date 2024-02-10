import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const [deleting, setDeleting] = useState(false);
  const [Error, setError] = useState(null);
  let navigate = useNavigate();
  const { id } = useParams()
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete(`https://book-store-backend-ij85.vercel.app/books/${id}`);
      console.log(`Book with ID ${id} deleted successfully.`);
      navigate("/")
    } catch (error) {
      setError(error);
    } finally {
      setDeleting(false);
    }
  };


  return (
    <div className='flex items-center justify-center flex-1 w-fit'>
      <dialog open  className='flex flex-1 flex-col p-5 rounded-xl bg-slate-300 text-slate-600 mt-[35%] ml-[47%]'>
        <h1 className='font-bold text-lg'>Delete Permenatly</h1>
        <button className='p-3 bg-red-500 text-white rounded-md text-lg font-bold' onClick={handleDelete}>Confirm</button>
      </dialog>
    </div>
  );
}

export default DeleteBook;
