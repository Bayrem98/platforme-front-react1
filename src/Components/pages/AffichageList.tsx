import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import Book from "../../@Types/Book";
import { getBooks } from "../../action/Books/action";

const AffichageList = () => {
  let { them } = useParams(); // params for théme books.
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks({ theme: them }, setBooks); // aka setBooks(data)
  }, [them]);

  return (
    <div className=" container affichage">
      <div className="row">
        <div className="col-12">
          <ListGroup>
            <ListGroupItem style={{ backgroundColor: "#b88a663a" }}>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <h5
                        style={{
                          color: "#0e0e0ee7",
                          fontSize: 20,
                          textShadow: "1px 1px 0 #000",
                          textAlign: "center",
                        }}
                      >
                        <FormattedMessage id="book.title" />
                      </h5>
                    </th>
                    <th>
                      <h5
                        style={{
                          color: "#0e0e0ee7",
                          fontSize: 20,
                          textShadow: "1px 1px 0 #000",
                          textAlign: "center",
                        }}
                      >
                        <FormattedMessage id="book.author" />
                      </h5>
                    </th>
                    <th>
                      <h5
                        style={{
                          color: "#0e0e0ee7",
                          fontSize: 20,
                          textShadow: "1px 1px 0 #000",
                          textAlign: "center",
                        }}
                      >
                        <FormattedMessage id="book.language" />
                      </h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={book._id}>
                      <th
                        style={{
                          color: "black",
                          paddingLeft: 5,
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={"/book/" + book._id}
                        >
                          <img
                            className="imageaffichage"
                            alt={book.title}
                            src={book.coverPath}
                            style={{ width: 20, height: 30 }}
                          />
                          -{book.title}
                        </Link>
                      </th>

                      <th style={{ color: "black", fontSize: 11 }}>
                        {book.author}
                      </th>
                      <th style={{ color: "black", fontSize: 10 }}>
                        {book.language}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default AffichageList;
