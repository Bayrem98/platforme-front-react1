import React from "react";
import { Link, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getBooks } from "../action/Books/action";
import Book from "../@Types/Book";
import { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
interface Props {}

const Theme5 = (props: Props) => {
  let { them } = useParams(); // params for théme books.
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks({ theme: them }, setBooks); // aka setBooks(data)
  }, [them]);

  return (
    <div
      className="box-border block left-[-147px] w-[1285px] h-[692px] relative overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <p className="whitespace-pre-wrap absolute top-[100px] left-[10px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        <FormattedMessage id="affichageList.title" />
      </p>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <Container style={{ paddingTop: 160 }}>
              <Table bordered responsive hover>
                <thead style={{ backgroundColor: "lightgray" }}>
                  <tr>
                    <th
                      className="font-['Poppins']"
                      style={{
                        color: "#0e0e0ee7",
                        fontSize: 18,
                      }}
                    >
                      <FormattedMessage id="book.title" />
                    </th>
                    <th
                      className="font-['Poppins']"
                      style={{
                        color: "#0e0e0ee7",
                        fontSize: 18,
                      }}
                    >
                      <FormattedMessage id="book.author" />
                    </th>
                    <th
                      className="font-['Poppins']"
                      style={{
                        textAlign: "center",
                        color: "#0e0e0ee7",
                        fontSize: 18,
                      }}
                    >
                      <FormattedMessage id="book.coverpath" />
                    </th>
                    <th
                      className="font-['Poppins']"
                      style={{
                        textAlign: "center",
                        color: "#0e0e0ee7",
                        fontSize: 18,
                      }}
                    >
                      <FormattedMessage id="book.language" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {books.length ? (
                    books.map((book) => (
                      <tr key={book._id}>
                        <th
                          className="font-['Poppins']"
                          style={{
                            color: "black",
                            fontSize: 15,
                          }}
                        >
                          {" "}
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to={"/bookdetails/" + book._id}
                          >
                            {book.title}
                          </Link>
                        </th>
                        <th
                          className="font-['Poppins']"
                          style={{
                            color: "black",
                            fontSize: 13,
                          }}
                        >
                          {book.author}
                        </th>
                        <th style={{ color: "black", fontSize: 13 }}>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to={"/bookdetails/" + book._id}
                          >
                            <img
                              alt={book.title}
                              src={book.coverPath}
                              style={{
                                width: 30,
                                height: 40,
                                textAlign: "center",
                              }}
                            />
                          </Link>
                        </th>

                        <th
                          style={{
                            color: "black",
                            fontSize: 13,
                            textAlign: "center",
                          }}
                        >
                          {book.language}
                        </th>
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
        </div>
      </div>
    </div>
  );
};

export default Theme5;
