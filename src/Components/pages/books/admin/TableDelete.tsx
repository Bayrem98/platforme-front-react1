import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FormattedMessage } from "react-intl";
import Table from "../../../../@Types/Table";
import { deleteTables } from "../../../../action/Tables/action";

interface TableDeletePropsType {
  table: Table;
  refresh: () => void;
}

const TableDelete = ({ table, refresh }: TableDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false); // form state for modal.

  const submit = () => {
    deleteTables(table, () => {
      refresh();
      setIsOpened(false);
    });
  };

  return (
    <>
      <Button
        className="btn3-delete"
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
          <FormattedMessage id="table.delete.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <FormattedMessage id="tables.delete.dialog.text" /> {table.mois} ?
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

export default TableDelete;
