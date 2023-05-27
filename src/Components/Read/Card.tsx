import { Link } from "react-router-dom";
import { useToggle } from "../../Hooks/ToggleHook";
import { AiTwotoneBook } from "react-icons/ai";

interface iProps {
  _id: string;
  name: string;
  author: string;
  price: number;
  isbn: number;
}

export default function Card(props: iProps) {
  const changeTheme = useToggle();
  return (
    <>
      <div
        className="max-w-sm w-full h-full p-6 border border-gray-300 rounded-lg"
        style={changeTheme}
      >
        <AiTwotoneBook className="w-24 h-24" />
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          {props.name}
        </h5>
        <span className="flex justify-start gap-2 my-1">
          <h4 className="font-semibold text-slate-900">Author: </h4>
          <p className="font-normal text-gray-500">{props.author}</p>
        </span>
        <span className="flex justify-start gap-2 my-1">
          <h4 className="font-semibold text-slate-900">Price: </h4>
          <p className="font-normal text-gray-500">{props.price.toString()}</p>
        </span>
        <span className="flex justify-start gap-2 my-1">
          <h4 className="font-semibold text-slate-900">ISBN: </h4>
          <p className="font-normal text-gray-500">{props.isbn.toString()}</p>
        </span>
        <Link
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          to={`/read/${props._id}`}
        >
          To detail
          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
      </div>
    </>
  );
}
