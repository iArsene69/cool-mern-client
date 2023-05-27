import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

type iUpdateData = {
  _id: string, 
  name: string;
  author: string;
  price: number;
  isbn: number;
};
export default function Update() {
  const { id } = useParams<string>();
  const [bookList, setBookList] = useState<iUpdateData>({
    _id: "",
    name: "",
    author: "",
    price: 0,
    isbn: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/book/show/${id}`)
      .then((res) => {
        setBookList({
          _id: res.data._id,
          name: res.data.name,
          author: res.data.author,
          price: res.data.price,
          isbn: res.data.isbn,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const updateBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: bookList.name,
      author: bookList.author,
      price: bookList.price,
      isbn: bookList.isbn,
    };

    axios
      .put(`http://127.0.0.1:3000/book/edit/${id}`, data)
      .then(() => navigate(`/read`))
      .catch((err) => console.error(err));
  };

  const deleteBook = (id: string) => {
    axios.delete(`http://127.0.0.1:3000/book/delete/${id}`)
    .then(()=> navigate('/read'))
    .catch(err => console.error(err))
  }
  return(
    <>
      <div className="h-64 flex items-center justify-center ">
        <form noValidate onSubmit={updateBook}>
          <div>
            <label htmlFor="">Book Tittle</label>
            <input
              type="text"
              placeholder="Book Tittle"
              name="name"
              value={bookList.name}
              onChange={(e) => {
                setBookList((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Book Author</label>
            <input
              type="text"
              placeholder="Book Author"
              name="author"
              value={bookList.author}
              onChange={(e) => {
                setBookList((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Book Price</label>
            <input
              type="number"
              placeholder="Book Price"
              name="price"
              value={bookList.price === 0 ? '' : bookList.price}
              onChange={(e) => {
                setBookList((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Book ISBN</label>
            <input
              type="number"
              placeholder="Book ISBN"
              name="isbn"
              value={bookList.isbn === 0 ? '' : bookList.isbn}
              onChange={(e) => {
                setBookList((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
              required
            />
          </div>
          <br />
          <button type="submit">Update</button>
          <button type="button" onClick={()=>{deleteBook(bookList._id)}}>Delete</button>
        </form>
      </div>
    </>
  );
}
