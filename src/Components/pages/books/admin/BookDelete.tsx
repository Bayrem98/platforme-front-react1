import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FormattedMessage } from "react-intl";
import Book from "../../../../@Types/Book";
import { deleteBooks } from "../../../../action/Books/action";

interface BookDeletePropsType {
  book: Book;
  refresh: () => void;
}

const BookDelete = ({ book, refresh }: BookDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false); // form state for modal.

  const submit = () => {
    deleteBooks(book, () => {
      refresh();
      setIsOpened(false);
    });
  };

  return (
    <>
      <Button
        className="btn3-delete font-['Helvetica']"
        color="danger"
        onClick={() => setIsOpened(true)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Modal
        className="font-['Helvetica']"
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
          <FormattedMessage id="books.delete.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <FormattedMessage id="books.delete.dialog.text" /> {book.title} ?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submit}>
            <FormattedMessage id="button.confirm" />
          </Button>{" "}
          <Button onClick={() => setIsOpened(false)}>
            <FormattedMessage id="button.cancel" />
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default BookDelete;
