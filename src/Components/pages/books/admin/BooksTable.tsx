import { useEffect, useState } from "react";
import { ButtonGroup, Container, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import Book from "../../../../@Types/Book";
import { getBooks } from "../../../../action/Books/action";
import BookAdd from "./BookAdd";
import BookDelete from "./BookDelete";

const BooksTable = () => {
  const [books, setBooks] = useState<Book[]>([]); // form state for books.

  useEffect(() => {
    getBooks(null, setBooks); // aka setBooks(data)
  }, []);

  return (
    <>
      <Container className="tablebook">
        <div
          className="d-flex justify-content-between"
          style={{
            color: "#0e0e0ee7",
            fontSize: 30,
            textShadow: "1px 1px 0 #000",
          }}
        >
          <FormattedMessage id="page.title.books" />
          <BookAdd refresh={() => getBooks(null, setBooks)} />
        </div>
        <Table bordered responsive>
          <thead>
            <tr>
              <th style={{ color: "#0e0e0ee7" }}>
                <FormattedMessage id="book.title" />
              </th>
              <th style={{ color: "#0e0e0ee7" }}>
                <FormattedMessage id="book.author" />
              </th>
              <th style={{ color: "#0e0e0ee7" }}>
                <FormattedMessage id="book.coverpath" />
              </th>
              <th style={{ color: "#0e0e0ee7" }}>
                <FormattedMessage id="book.language" />
              </th>
              <th style={{ color: "#0e0e0ee7" }}>
                <FormattedMessage id="book.theme" />
              </th>
              <th style={{ color: "#0e0e0ee7" }}>
                <FormattedMessage id="book.actions" />
              </th>
            </tr>
          </thead>
          <tbody>
            {books.length ? (
              books.map((book) => (
                <tr key={book._id}>
                  <td
                    className="table"
                    style={{
                      color: "#0e0e0ee7",
                      fontSize: 18,
                      textShadow: "1px 1px 0 #000",
                    }}
                  >
                    {book.title}
                  </td>
                  <td className="table" style={{ color: "#0e0e0ee7" }}>
                    {book.author}
                  </td>

                  <td
                    className="img-table"
                    style={{ color: "#0e0e0ee7", cursor: "pointer" }}
                  >
                    <img src={book.coverPath} alt="" width={20} />
                  </td>

                  <td className="table" style={{ color: "#0e0e0ee7" }}>
                    {book.language}
                  </td>
                  <td className="table" style={{ color: "#0e0e0ee7" }}>
                    {book.theme}
                  </td>
                  <td>
                    <ButtonGroup>
                      <BookDelete
                        book={book}
                        refresh={() => getBooks(null, setBooks)}
                      />
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-5"
                  style={{ color: "#0e0e0ee7" }}
                >
                  <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                  <br />
                  <FormattedMessage id="page.users.no-data" />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default BooksTable;
