import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const dialogRef = useRef();
  const publishRef = useRef();

  const [showFlag, setShowFlag] = useState(false);

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishDate: '',
    categories: '',
    published: false,
  });

  const closeDialog = () => {
    dialogRef.current.close();
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://book-store-backend-ij85.vercel.app/books", formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setShowFlag(true);
      setTimeout(() => {
        setShowFlag(false);
        navigate("/");
      }, 900);
      console.log(res);
      console.log(res.status);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <dialog ref={dialogRef} className="p-4 px-7 w-96 shadow-2xl rounded-lg bg-slate-200 mt-32 gap-2 " open>
        <h1 className='text-2xl font-semibold mb-5 '>Add new book</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className="block text-sm font-medium text-slate-600">Title:</label>
            <input
              type='text'
              value={formData.title}
              onChange={handleChange}
              name='title'
              className='mt-1 p-2 border rounded-md w-full'
              required
            />
            <label className="block text-sm font-medium text-slate-600">Author:</label>
            <input
              type='text'
              value={formData.author}
              onChange={handleChange}
              name='author'
              className='mt-1 p-2 border rounded-md w-full'
              required
            />

            {formData.published && (
              <>
                <label className="block text-sm font-medium text-slate-600">
                  PublishDate:
                </label>
                <input
                  type='date'
                  value={formData.publishDate}
                  onChange={handleChange}
                  name='publishDate'
                  className='mt-1 p-2 border rounded-md w-full'
                  required
                />
              </>
            )}
            <label className="block text-sm font-medium text-slate-600">Categories:</label>
            <input
              type='text'
              value={formData.categories}
              onChange={handleChange}
              name='categories'
              className='mt-1 p-2 border rounded-md w-full'
              required
            />
            <label className="flex items-center self-center mt-2 justify-center w-fit ml-1 text-base text-slate-600 font-medium">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="mr-2 self-center transform scale-125"
                ref={publishRef}
              />
              Published?
              {/* {formData.published ? "" : "Not published"} */}
            </label>

            <div className="flex justify-end mt-4">
              <button type="button" onClick={closeDialog} className="mr-2 bg-gray-300 px-4 py-2 rounded-md">
                Cancel
              </button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleSubmit}
              >
                Add Book
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default CreateBook;
