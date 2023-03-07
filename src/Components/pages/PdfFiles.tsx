import React, { useRef, useEffect, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import { useNavigate, useParams } from "react-router";
import Book from "../../@Types/Book";
import { getBook } from "../../action/Books/action";
import { FormattedMessage } from "react-intl";

function PdfFiles() {
  const viewerDiv = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // for button return.

  let { bookId } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (bookId) getBook(bookId, setBook); // aka setBook(data)
  }, [bookId]);

  useEffect(() => {
    if (book && viewerDiv.current)
      WebViewer(
        {
          path: "/lib",
          initialDoc: book.pdfPath,
        },
        viewerDiv.current as HTMLDivElement
      );
  }, [book]); // function for lecteur pdf.

  return book ? (
    <div
      className="h-[822px] w-[1030px] top-[50px] left-[247px] absolute"
      ref={viewerDiv}
    >
      <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
        <img
          src="/img/previous (2).png"
          alt=""
          width={25}
          className="absolute top-[82px] left-[34px]"
        />
        <p className="top-[84px] left-[65px] absolute capitalize text-[#b79e56] font-['Helvetica']">
          <FormattedMessage id="bookdetails.button" />
        </p>
        <audio
          style={{ width: 220 }}
          className="top-[150px] left-[808px] absolute"
          controls
          controlsList="nodownload"
        >
          <source src={book.audio} />
        </audio>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default PdfFiles;
