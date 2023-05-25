import { AiTwotoneBook } from "react-icons/ai";
import { Link } from "react-router-dom";

interface iProps {
  _id: string,
  name: string;
  author: string;
  price: number;
  isbn: number;
}

export default function Card(props: iProps) {
  return (
    <>
      <div className="max-w-sm w-full h-full p-6 border border-gray-300 rounded-lg bg-slate-200">
        <AiTwotoneBook className="w-10 h-10 mb-2 text-gray-500" />
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          {props.name}
        </h5>
        <p className="mb-3 font-normal text-gray-500">{props.author}</p>
        {props.price && (
          <p className="mb-3 font-normal text-gray-500">
            {props.price.toString()}
          </p>
        )}
        {props.isbn && (
          <p className="mb-3 font-normal text-gray-500">
            {props.isbn.toString()}
          </p>
        )}
        <Link to={`/read/${props._id}`}>To detail</Link>
      </div>
    </>
  );
}
