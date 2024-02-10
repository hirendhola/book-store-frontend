import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import DataValue from '../components/DataValue';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Homebook() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [totalPublishedBookCount, setTotalPublishedBookCount] = useState(0);
  const [totalUnPublishedBookCount, setTotalUnPublishedBookCount] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get("https://book-store-backend-ij85.vercel.app/books");
        setTimeout(() => {
          setBooks(response.data.data);
          setLoading(false);
        }, 400);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const { published: publishedCount, unpublished: unpublishedCount } = books.reduce(
      (count, book) => ({
        published: count.published + (book.published ? 1 : 0),
        unpublished: count.unpublished + (book.published ? 0 : 1),
      }),
      { published: 0, unpublished: 0 }
    );

    setTotalPublishedBookCount(publishedCount);
    setTotalUnPublishedBookCount(unpublishedCount);
  }, [books]);

  const handleDelete = (id) => { navigate(`/book/delete/${id}`) };
  const handleEdit = (id) => { 
    console.log("handleEdit") 
    navigate(`/book/edit/${id}`) 
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='flex flex-1 gap-3 ml-8  '>
            <DataValue title="Total book" count={books.length} />
            <DataValue title="Published book" count={totalPublishedBookCount} />
            <DataValue title="Unpublished book" count={totalUnPublishedBookCount} />
          </div>
          <div className="container mx-auto  ml-14">
            <h1 className="text-2xl font-bold mb-4">Book List</h1>
            <div className="overflow-x-auto mr-32 overflow-auto rounded-sm capitalize" >
              <table className="min-w-full bg-slate-100 border border-gray-300  text-center">
                <thead className="bg-slate-200 text-slate-800 ">
                  <tr>
                    <th className="py-2 px-2 border-b">Title</th>
                    <th className="py-2 px-2 border-b">Author</th>
                    <th className="py-2 px-2 border-b">Publish Date</th>
                    <th className="py-2 px-2 border-b">Categories</th>
                    <th className="py-2 px-2 border-b">Published</th>
                    <th className="py-2 px-2 border-b">Edit/delete</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700  ">
                  {books.map((book) => (
                    <tr key={book._id} >
                      <td className="py-2 px-4 border-b">{book.title}</td>
                      <td className="py-2 px-4 border-b">{book.author}</td>
                      <td className="py-2 px-4 border-b">
                        {new Date(book.publishDate).toLocaleDateString() === "Invalid Date" ? "-" : new Date(book.publishDate).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-4 border-b">{book.categories}</td>
                      <td className="py-2 px-4 border-b">{book.published.toString() === "false" ? "No" : "Yes"}</td>
                      <td className="py-2 px-2 border-b  flex gap-6 flex-row justify-center "><FaEdit className='cursor-pointer'
                        onClick={() => handleEdit(book._id)}
                      />
                        <MdDeleteForever
                          className='cursor-pointer'
                          onClick={() => handleDelete(book._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Homebook;
