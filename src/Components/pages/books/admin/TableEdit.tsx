import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { addtable } from "../../../../action/Tables/action";

interface TableEditPropsType {
  refresh: () => void;
}

const TableEdit = (props: TableEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [mois, setMois] = useState<string>("");
  const [phaseLun, setPhaseLun] = useState<string>("");
  const [date, setDate] = useState<any>();
  const [heure, setHeure] = useState<any>();
  const [distance, setDistance] = useState<string>("");
  const [signe, setSigne] = useState<string>("");
  const [zodiaque, setZodiaque] = useState<string>("");

  const submit = () => {
    const newTab = {
      mois,
      phaseLun,
      date,
      heure,
      distance,
      signe,
      zodiaque,
    };
    console.log(newTab);

    addtable(newTab, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setMois("");
    setPhaseLun("");
    setDate("");
    setHeure("");
    setDistance("");
    setSigne("");
    setZodiaque("");
  };

  return (
    <>
      <Button
        className="w-[50px] h-[50px] top-[-90px] left-[880px] absolute"
        style={{ backgroundColor: "#deb887", border: 0 }}
        size="lg"
        onClick={() => setIsOpened(true)}
      >
        <FontAwesomeIcon icon={faAdd} />
      </Button>
      <Modal
        className="font-['Helvetica']"
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          style={{ backgroundColor: "gray", color: "white" }}
          toggle={() => setIsOpened(!isOpened)}
        >
          <FormattedMessage id="books.add.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input
                value={mois}
                id="mois"
                name="mois"
                type="text"
                onChange={(e) => setMois(e.target.value)}
              />
              <Label for="mois">
                <FormattedMessage id="table.mois" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={phaseLun}
                id="phaseLun"
                name="phaseLun"
                type="text"
                onChange={(e) => setPhaseLun(e.target.value)}
              />
              <Label for="phaseLun">
                <FormattedMessage id="table.phaseLun" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={date}
                id="date"
                name="date"
                type="date"
                onChange={(e) => setDate(e.target.value)}
              ></Input>
              <Label for="date">
                <FormattedMessage id="table.date" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={heure}
                id="heure"
                name="heure"
                type="number"
                onChange={(e) => setHeure(e.target.value)}
              ></Input>
              <Label for="heure">
                <FormattedMessage id="table.heure" />
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="distance">
                <FormattedMessage id="table.distance" />
              </Label>
              <Input
                value={distance}
                id="distance"
                name="distance"
                type="number"
                onChange={(e) => setDistance(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="signe">
                <FormattedMessage id="table.signe" />
              </Label>
              <Input
                value={signe}
                id="signe"
                name="signe"
                type="text"
                onChange={(e) => setSigne(e.target.value)}
              />
            </FormGroup>
            <FormGroup floating>
              <Input
                value={zodiaque}
                id="zodiaque"
                name="zodiaque"
                type="text"
                onChange={(e) => setZodiaque(e.target.value)}
              />
              <Label for="zodiaque">
                <FormattedMessage id="table.zodiaque" />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            style={{
              backgroundColor: "gray",
              border: 0,
            }}
            onClick={submit}
            disabled={
              !mois ||
              !phaseLun ||
              !date ||
              !heure ||
              !distance ||
              !signe ||
              !zodiaque
            }
          >
            <FormattedMessage id="button.confirm" />
          </Button>{" "}
          <Button
            style={{
              backgroundColor: "gray",
              border: 0,
            }}
            onClick={() => setIsOpened(false)}
          >
            <FormattedMessage id="button.cancel" />
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default TableEdit;
