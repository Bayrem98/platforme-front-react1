import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardImg } from "reactstrap";
import Book from "../../../@Types/Book";
import { getBooks } from "../../../action/Books/action";

function Books() {
  let { them } = useParams(); // params for théme books.
  console.log(them);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks({ theme: them }, setBooks); // aka setBooks(data)
  }, [them]);

  return (
    <div className="container p-3 books">
      <div className="row">
        {books.map((book) => (
          <div className="col-lg-2 col-sm-6 col-xs-12" key={book._id}>
            <Card
              style={{
                height: 200,
                width: 180,
                marginTop: 75,
                marginBottom: 50,
                border: 0,
              }}
            >
              <Link to={"/book/" + book._id}>
                <CardImg
                  alt={book.title}
                  src={book.coverPath}
                  top
                  width="100%"
                />
              </Link>
            </Card>
            <img src="/img/raff.jpg" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Books;
