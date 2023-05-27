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
      <div className="h-64 flex items-center justify-center">
        <form noValidate onSubmit={submit}>
          <div className="text-lg text-orange-600">
            <label className="mx-3" htmlFor="">Book Tittle</label>
            <input className="focus:ring-0 focus:outline focus:outline-orange-500 focus:rounded-md"
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
          <div className="text-lg text-orange-600">
            <label className="mx-3" htmlFor="">Book Author</label>
            <input className="focus:ring-0 focus:outline focus:outline-orange-500 focus:rounded-md"
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
          <div className="text-lg text-orange-600">
            <label className="mx-3" htmlFor="">Book Price</label>
            <input className="focus:ring-0 focus:outline focus:outline-orange-500 focus:rounded-md"
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
          <div className="text-lg text-orange-600">
            <label className="mx-3" htmlFor="">Book ISBN</label>
            <input className="focus:ring-0 focus:outline focus:outline-orange-500 focus:rounded-md"
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
          <button className="mx-24 outline px-4 py-2 outline-orange-600 text-orange-600 rounded-md" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
