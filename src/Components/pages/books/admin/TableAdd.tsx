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

interface BookAddPropsType {
  refresh: () => void;
}

const fields = [
  { key: "Nouvelle Lune", name: "Nouvelle Lune" },
  { key: "Premier Quartier", name: "Premier Quartier" },
  { key: "Pleine Lune", name: "Pleine Lune" },
  { key: "Dernier Quartier", name: "Dernier Quartier" },
];

const fieldss = [
  { key: "Bélier", name: "Bélier" },
  { key: "Taureau", name: "Taureau" },
  { key: "Gémeaux", name: "Gémeaux" },
  { key: "Cancer", name: "Cancer" },
  { key: "Lion", name: "Lion" },
  { key: "Vierge", name: "Vierge" },
  { key: "Balance", name: "Balance" },
  { key: "Scorpion", name: "Scorpion" },
  { key: "Sagittaire", name: "Sagittaire" },
  { key: "Capricorne", name: "Capricorne" },
  { key: "Verseau", name: "Verseau" },
  { key: "Poissons", name: "Poissons" },
];

const TableAdd = (props: BookAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [mois, setMois] = useState<string>("");
  const [phaseLun, setPhaseLun] = useState<string>("");
  const [date, setDate] = useState<any>();
  const [signe, setSigne] = useState<string>("");
  const [coverPath, setCoverPath] = useState<any>();

  const changeCoverHandler = (event: any) => {
    const selectedCover = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedCover);
    fetch("http://localhost:5000/upload/cover", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setCoverPath("http://localhost:5000/upload/cover/" + result.filename);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCoverPath(undefined);
      });
  };

  const submit = () => {
    const newTab = {
      mois,
      phaseLun,
      date,
      signe,
      coverPath,
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
    setSigne("");
    setCoverPath("");
  };

  return (
    <>
      <Button
        className="w-[50px] h-[50px] top-[-50px] left-[880px] absolute"
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
          <FormattedMessage id="tables.add.dialog.title" />
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
                <FormattedMessage id="acc.table.mois" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={phaseLun}
                id="phaseLun"
                name="phaseLun"
                type="select"
                onChange={(e) => setPhaseLun(e.target.value)}
              >
                {fields.map((f) => (
                  <option key={f.key} value={f.key}>
                    {f.name}
                  </option>
                ))}
              </Input>
              <Label for="phaseLun">
                <FormattedMessage id="acc.table.Phase" />
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
                <FormattedMessage id="acc.table.date" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={signe}
                id="signe"
                name="signe"
                type="select"
                onChange={(e) => setSigne(e.target.value)}
              >
                {fieldss.map((f) => (
                  <option key={f.key} value={f.key}>
                    {f.name}
                  </option>
                ))}
              </Input>
              <Label for="signe">
                <FormattedMessage id="acc.table.signe" />
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="coverPath">
                <FormattedMessage id="book.coverPath" />
              </Label>
              <Input
                id="coverPath"
                name="coverPath"
                type="file"
                onChange={changeCoverHandler}
              />
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
            disabled={!phaseLun || !date || !signe}
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

export default TableAdd;
