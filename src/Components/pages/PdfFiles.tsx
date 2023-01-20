import React, { useRef, useEffect, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import { useNavigate, useParams } from "react-router";
import Book from "../../@Types/Book";
import { getBook } from "../../action/Books/action";
import IconNavArrowLeft from "../modules/IconNavArrowLeft";
import Ellipse1 from "../modules/Ellipse1";
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

  return (
    <div
      className="h-[690px] w-[1285px] top-[50px] left-[247px] absolute"
      ref={viewerDiv}
    >
      <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
        <IconNavArrowLeft />
        <Ellipse1 />
        <p className="top-[82px] left-[65px] absolute capitalize text-[#897647] font-['Helvetica']">
          <FormattedMessage id="bookdetails.button" />
        </p>
      </div>
    </div>
  );
}

export default PdfFiles;
