import { useEffect, useState } from "react";
import unsplashHh4WbgNyltc from "../assets/unsplashHh4WbgNyltc.jpeg";
import unsplashZvKx6IxUhWq from "../assets/unsplashZvKx6IxUhWq.jpeg";
import unsplashS3NUOqDmUvc from "../assets/unsplashS3NUOqDmUvc.jpeg";
import unsplashUhdlN7U87NA from "../assets/unsplashUhdlN7U87NA.jpeg";
import { Link, useParams } from "react-router-dom";
import Book from "../../@Types/Book";
import { getBooks } from "../../action/Books/action";
import Rectangle73 from "../modules/Rectangle73";
import Group10 from "../modules/Group10";
import { FormattedMessage } from "react-intl";
import { Table } from "reactstrap";
import Tablee from "../../@Types/Table";
import { getTables } from "../../action/Tables/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
interface props {}

const Accueil = (props: props) => {
  let { them } = useParams(); // params for théme books.
  const [books, setBooks] = useState<Book[]>([]);
  const [tables, setTables] = useState<Tablee[]>([]);

  useEffect(() => {
    getBooks({ theme: them }, setBooks); // aka setBooks(data)
  }, [them]);

  useEffect(() => {
    getTables(null, setTables); // aka setBooks(data)
  }, []);

  return (
    <div
      className="box-border block left-[245px] w-[1035px] h-[822px] absolute overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <p className="whitespace-pre-wrap absolute top-[40px] left-[20px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#b79e56]">
        <FormattedMessage id="page.title.tables" />
      </p>

      <div className="absolute top-[110px] left-[10px]">
        <Table responsive hover>
          <thead
            style={{
              backgroundColor: "lightgray",
              color: "black",
            }}
          >
            <tr>
              <th style={{ textAlign: "center" }}>
                <FormattedMessage id="acc.table.mois" />
              </th>
              <th style={{ textAlign: "center" }}>
                <FormattedMessage id="acc.table.Phase" />
              </th>
              <th style={{ textAlign: "center" }}>
                <FormattedMessage id="acc.table.date" />
              </th>
              <th style={{ textAlign: "center" }}>
                <FormattedMessage id="acc.table.signe" />
              </th>
              <th style={{ textAlign: "center", width: 60 }}>
                <FormattedMessage id="book.coverpath" />
              </th>
            </tr>
          </thead>
          <tbody style={{ color: "black" }}>
            {tables.length ? (
              tables.map((table) => (
                <tr key={table._id}>
                  <td style={{ textAlign: "center" }}>{table.mois}</td>
                  <td style={{ textAlign: "center" }}>{table.phaseLun}</td>
                  <td style={{ textAlign: "center" }}>{table.date}</td>
                  <td style={{ textAlign: "center" }}>{table.signe}</td>
                  <td style={{ textAlign: "center" }}>
                    <img
                      style={{ alignItems: "center" }}
                      src={table.coverPath}
                      alt=""
                      width={50}
                    />
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
      </div>

      <p className="whitespace-pre-wrap absolute top-[420px] left-[20px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#b79e56]">
        <FormattedMessage id="title2.acc" />
      </p>

      <p className="whitespace-pre-wrap absolute top-[40px] left-[600px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#b79e56]">
        <FormattedMessage id="title.acc" />
      </p>

      <img
        className="w-[234px] h-[234px] absolute top-[500px] left-[10px] object-cover rounded-[32px]"
        src={unsplashHh4WbgNyltc}
        alt="theme1"
      />

      <img
        className="w-[234px] h-[234px] absolute top-[500px] left-[260px] object-cover rounded-[32px]"
        src={unsplashUhdlN7U87NA}
        alt="theme2"
      />

      <img
        className="w-[234px] h-[234px] absolute top-[500px] left-[520px] object-cover rounded-[32px]"
        src={unsplashZvKx6IxUhWq}
        alt="theme3"
      />

      <img
        className="w-[234px] h-[234px] absolute top-[500px] left-[770px] object-cover rounded-[32px]"
        src={unsplashS3NUOqDmUvc}
        alt="theme4"
      />

      <Rectangle73 />

      {books.map((book) => (
        <div key={book._id}>
          <Link to={"/bookdetails/" + book._id}>
            <img
              className="w-[164px] h-[220px] absolute top-[110px] left-[605px] object-cover"
              style={{
                boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
              }}
              src={book.coverPath}
              alt={book.title}
              key={book._id}
            />
          </Link>
          <p className="whitespace-pre-wrap absolute top-[210px] left-[785px] w-[207px] font-['Helvetica'] text-base leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
            <span className="whitespace-pre-wrap w-[207px] font-['Helvetica'] text-base leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
              <FormattedMessage id="accueil.title.book1" />
            </span>
          </p>
          <p className="whitespace-pre-wrap absolute top-[270px] left-[820px] font-['Helvetica'] text-sm leading-[normal] tracking-[0.03em] italic text-left capitalize text-[#585757]">
            <FormattedMessage id="accueil.title.book2" />
          </p>
        </div>
      ))}

      <Group10 />
      <p className="whitespace-pre-wrap absolute top-[790px] left-[25px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-black">
        <FormattedMessage id="theme1" />
      </p>
      <p className="whitespace-pre-wrap absolute top-[790px] left-[290px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-black">
        <FormattedMessage id="theme2" />
      </p>
      <p className="whitespace-pre-wrap absolute top-[790px] left-[540px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-black">
        <FormattedMessage id="theme3" />
      </p>
      <p className="whitespace-pre-wrap absolute top-[790px] left-[855px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-black">
        <FormattedMessage id="theme4" />
      </p>
    </div>
  );
};
export default Accueil;
