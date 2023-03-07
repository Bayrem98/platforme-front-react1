import React from "react";
import { useEffect, useState } from "react";
import Line1 from "./modules/Line1";
import { FormattedMessage } from "react-intl";
import Book from "../@Types/Book";
import { getBooks } from "../action/Books/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { ButtonGroup, Container, Table } from "reactstrap";
import BookAdd from "./pages/books/admin/BookAdd";
import BookDelete from "./pages/books/admin/BookDelete";
interface Props {}

const BooksTable = (props: Props) => {
  const [books, setBooks] = useState<Book[]>([]); // form state for books.

  useEffect(() => {
    getBooks(null, setBooks); // aka setBooks(data)
  }, []);

  return (
    <div
      className="box-border block left-[245px] w-[1035px] h-[822px] absolute overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <Line1 />

      <p className="whitespace-pre-wrap absolute top-[60px] left-[15px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#b79e56]">
        <FormattedMessage id="page.title.books" />
      </p>

      <Container className="top-[130px] absolute font-['Helvetica']">
        <BookAdd refresh={() => getBooks(null, setBooks)} />
        <Table bordered responsive hover>
          <thead style={{ backgroundColor: "lightgray" }}>
            <tr>
              <th className="font-['Helvetica']">
                <FormattedMessage id="book.title" />
              </th>
              <th className="font-['Helvetica']">
                <FormattedMessage id="book.author" />
              </th>
              <th className="font-['Helvetica']">
                <FormattedMessage id="book.coverpath" />
              </th>
              <th className="font-['Helvetica']">
                <FormattedMessage id="book.language" />
              </th>
              <th>
                <FormattedMessage id="book.theme" />
              </th>
              <th>
                <FormattedMessage id="book.audios" />
              </th>
              <th style={{ textAlign: "center" }} className="font-['Helvetica']">
                <FormattedMessage id="book.actions" />
              </th>
            </tr>
          </thead>
          <tbody>
            {books.length ? (
              books.map((book) => (
                <tr key={book._id}>
                  <td
                    className="font-['Helvetica']"
                    style={{
                      color: "#0e0e0ee7",
                      fontSize: 15,
                    }}
                  >
                    {book.title}
                  </td>
                  <td
                    className="font-['Helvetica']"
                    style={{ color: "#0e0e0ee7" }}
                  >
                    {book.author}
                  </td>

                  <td style={{ color: "#0e0e0ee7", cursor: "pointer" }}>
                    <img src={book.coverPath} alt="" width={20} />
                  </td>

                  <td
                    className="font-['Helvetica']"
                    style={{ color: "#0e0e0ee7" }}
                  >
                    {book.language}
                  </td>
                  <td
                    className="font-['Helvetica']"
                    style={{ color: "#0e0e0ee7" }}
                  >
                    {book.theme}
                  </td>
                  <td
                    className="font-['Helvetica']"
                    style={{ color: "#0e0e0ee7" }}
                  >
                    <audio
                      style={{ width: 100 }}
                      controls
                      controlsList="nodownload"
                    >
                      <source src={book.audio} />
                    </audio>
                  </td>
                  <td style={{ textAlign: "center" }}>
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
    </div>
  );
};

export default BooksTable;
