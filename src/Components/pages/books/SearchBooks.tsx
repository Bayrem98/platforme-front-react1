import axios from "axios";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useParams } from "react-router-dom";
import Book from "../../../@Types/Book";

const SearchBooks = () => {
  let { search } = useParams(); // params for search books.

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/book/search/" + search, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(({ data }) => {
        console.log(data);

        setBooks(data);
      })
      .catch((e) => {
        console.log(e.response.data.messagee);
      });
  }, [search]); // function for search bar.

  return (
    <div
      className="box-border block left-[245px] w-[1035px] h-[855px] absolute overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <p className="whitespace-pre-wrap absolute top-[60px] left-[10px] font-['Helvetica'] text-base leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        <FormattedMessage id="search.page.title" />
      </p>

      <div className="container p-3 top-[100px] absolute">
        <div className="row">
          {books.map((book) => (
            <div className="col-md-2" style={{ padding: 40 }} key={book._id}>
              <Link to={"/bookdetails/" + book._id}>
                <img
                  className="p-1 relative"
                  style={{
                    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.70)",
                  }}
                  src={book.coverPath}
                  alt={book.title}
                  key={book._id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
