import React from "react";
import Ellipse2 from "./modules/Ellipse2";
import IconNavArrowLeft from "./modules/IconNavArrowLeft";
import Ellipse1 from "./modules/Ellipse1";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import Book from "../@Types/Book";
import { useEffect, useState } from "react";
import { getBook } from "../action/Books/action";
interface Props {}

const BookDetails = (props: Props) => {
  let { bookId } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (bookId) getBook(bookId, setBook); // aka setBook(data)
  }, [bookId]);

  const navigate = useNavigate();

  return book ? (
    <div
      className="box-border block left-[245px] w-[1035px] h-[855px] absolute overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <Ellipse2 />
      <Link to={"/pdffiles/" + book._id} style={{ textDecoration: "none" }}>
        <Button
          className="w-[187px] h-[42px] absolute top-[570px] left-[480px] rounded-[20px] font-['Helvetica'] bg-[#62625c]"
          style={{
            boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
          }}
        >
          <FormattedMessage id="page.book.button" />
        </Button>
      </Link>
      <div className="w-[168px] h-[219px] absolute top-[321px] left-[452px] bg-transparent" />
      <img
        className="w-[246px] h-[348px] absolute top-[160px] left-[95px] object-cover"
        style={{
          boxShadow: "0px 4px 5px 0 rgba(0,0,0,0.3)",
        }}
        src={book.coverPath}
        alt=""
      />
      <p className="whitespace-pre-wrap absolute top-[175px] left-[380px] w-[343px] h-[33px] font-['Helvetica'] text-2xl leading-[normal] tracking-[0.03em] italic text-left capitalize text-[#000000]">
        {book.title}
      </p>
      <p className="whitespace-pre-wrap absolute top-[250px] left-[380px] w-[541px] h-8 font-['Helvetica'] text-2xl leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-[#7d7c7c]">
        {book.author}
      </p>
      <p className="whitespace-pre-wrap absolute top-[299px] left-[390px] w-[559px] h-[130px] font-['Helvetica'] text-base leading-[normal] tracking-[0.03em] italic text-justify capitalize text-black">
        {book.description}
      </p>
      <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
        <IconNavArrowLeft />
        <Ellipse1 />
        <p className="top-[82px] left-[65px] absolute capitalize text-[#897647] font-['Helvetica']">
          <FormattedMessage id="bookdetails.button" />
        </p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default BookDetails;
