import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Book from "../../../@Types/Book";
import { getBook } from "../../../action/Books/action";

function BookPage() {
  let { bookId } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (bookId) getBook(bookId, setBook); // aka setBook(data)
  }, []);

  const navigate = useNavigate(); // for button return.

  return book ? (
    <div className="container book">
      <div className="row">
        <div className="col-md-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">{book.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                *{book.author}*
              </CardSubtitle>
              <CardText tag="h6" style={{ color: "black" }}>
                {book.language}
              </CardText>
              <CardText tag="h6" style={{ color: "white" }}>
                {book.theme}
              </CardText>
            </CardBody>
            <CardImg
              alt={book.title}
              bottom
              src={book.coverPath}
              width="100%"
              height="415"
            />
          </Card>
        </div>
        <div className="col-md-8">
          <div>
            <p className="text-break">{book.description}</p>
            <br />
            <Link
              to={"/pdffiles/" + book._id}
              style={{ textDecoration: "none" }}
            >
              <Button className="btn1-book">
                <FormattedMessage id="page.book.button" />
              </Button>
            </Link>
            <br />
            <br />
            <Button className="btn4-book" onClick={() => navigate(-1)}>
              <img
                className="img-flech"
                src="/img/icons/back grey.png"
                height={50}
                width={50}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
export default BookPage;
