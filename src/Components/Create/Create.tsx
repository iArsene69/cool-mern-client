import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type iBook = {
  name: string;
  author: string;
  price: number;
  isbn: number;
};

export default function Create() {
  const [bookList, setBookList] = useState<iBook>({
    name: "",
    author: "",
    price: 0,
    isbn: 0,
  });

  const navigate = useNavigate();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(bookList);
    axios
      .post("http://127.0.0.1:3000/book/newbook", bookList)
      .then(() => {
        setBookList({
          name: "",
          author: "",
          price: 0,
          isbn: 0,
        });
        navigate("/read");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div>
        <form noValidate onSubmit={submit}>
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
              value={bookList.price === 0 ? "" : bookList.price}
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
              value={bookList.isbn === 0 ? "" : bookList.isbn}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
