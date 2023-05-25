import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

interface iData {
  _id: string,
  name: string;
  author: string;
  price: number;
  isbn: number;
}

export default function Read() {
  const [bookList, setBookList] = useState<iData[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/book/show")
      .then((res) => {
        setBookList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-around gap-7 mx-24 my-12">
        {bookList.length === 0 ? (
          <strong>No Data Found</strong>
        ) : (
          bookList.map((res, key) => {
            return <Card key={key} {...res} />;
          })
        )}
      </div>
    </>
  );
}
