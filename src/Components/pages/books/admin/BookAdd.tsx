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
} from "reactstrap";
import { addbook } from "../../../../action/Books/action";

interface BookAddPropsType {
  refresh: () => void;
}

const fields = [
  { key: "FR", name: "Francais" },
  { key: "EN", name: "Anglais" },
]; // language selecteur for books.

const fieldss = [
  { key: "numerolo", name: "Numérologie" },
  { key: "tarm", name: "Tarot De Marseille" },
  { key: "tri", name: "Triade" },
  { key: "astro", name: "Astrologie" },
  { key: "bell", name: "Belline" },
  { key: "ora g", name: "Oracle Gé" },
  { key: "orac b", name: "Oracle Bleu" },
  { key: "j 32", name: "Jeu 32" },
  { key: "ref n", name: "Référentiel De Naissance" },
  { key: "chir", name: "Chiromancie" },
  { key: "mouv l", name: "Mouvement Lunaires" },
  { key: "int rev", name: "Interprétation Des Rêves" },
  { key: "int num", name: "Initiation Numérologie" },
  { key: "int tar", name: "Initiation Tarot De Marseille" },
  { key: "cul gen", name: "Culture Générale" },
  { key: "int astro", name: "Initiation Astrologie" },
  { key: "com", name: "Communication" },
  { key: "coch", name: "Coaching Développement Personnel" },
  { key: "nat hum", name: "La Nature Humaine" },
  { key: "Boudd", name: "Le Bouddhisme" },
  { key: "autr", name: "Autres" },
]; // théme selectioner pour chaque livre.

const BookAdd = (props: BookAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [coverPath, setCoverPath] = useState<any>();
  const [pdfPath, setPdfPath] = useState<any>();
  const [language, setLanguage] = useState<string>(fields[0].key);
  const [theme, setTheme] = useState<string>(fieldss[0].key);
  const [description, setDescription] = useState<string>("");
  const [audio, setAudio] = useState<any>();

  const changeCoverHandler = (event: any) => {
    const selectedCover = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedCover);
    fetch("http://localhost:5001/upload/cover", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setCoverPath("http://localhost:5001/upload/cover/" + result.filename);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCoverPath(undefined);
      });
  }; // function for upload cover book.

  const changePDFHandler = (event: any) => {
    const selectedPDF = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedPDF);
    fetch("http://localhost:5001/upload/pdf", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setPdfPath("http://localhost:5001/upload/pdf/" + result.filename);
      })
      .catch((error) => {
        console.error("Error:", error);
        setPdfPath(undefined);
      });
  }; // function for upload pdf book.

  const changeAudioHandler = (event: any) => {
    const selectedAudio = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedAudio);
    fetch("http://localhost:5001/upload/audio", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setAudio("http://localhost:5001/upload/audio/" + result.filename);
      })
      .catch((error) => {
        console.error("Error:", error);
        setAudio(undefined);
      });
  }; // function for upload audio book.

  const submit = () => {
    const newBook = {
      title,
      author,
      coverPath,
      pdfPath,
      language,
      theme,
      description,
      audio,
    };
    console.log(newBook);

    addbook(newBook, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setTitle("");
    setAuthor("");
    setCoverPath("");
    setPdfPath("");
    setLanguage(fields[0].key);
    setTheme(fieldss[0].key);
    setDescription("");
    setAudio("");
  };

  return (
    <>
      <Button
        className="w-[50px] h-[50px] top-[-90px] left-[880px] absolute"
        style={{ backgroundColor: "#b79e56", border: 0 }}
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
        <ModalBody>
          <p
            style={{
              color: "#b79e56",
              textAlign: "center",
              textDecoration: "underline",
              fontSize: 25,
            }}
          >
            <FormattedMessage id="books.add.dialog.title" />
          </p>
          <span
            onClick={() => setIsOpened(false)}
            style={{
              position: "absolute",
              right: 10,
              top: 2,
              cursor: "pointer",
              color: "gray",
              fontSize: 20,
            }}
          >
            X
          </span>
          <br />
          <Form>
            <FormGroup floating>
              <Input
                value={title}
                id="title"
                name="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Label for="title">
                <FormattedMessage id="book.title" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={author}
                id="author"
                name="author"
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
              />
              <Label for="author">
                <FormattedMessage id="book.author" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={language}
                id="language"
                name="language"
                type="select"
                onChange={(e) => setLanguage(e.target.value)}
              >
                {fields.map((f) => (
                  <option key={f.key} value={f.key}>
                    {f.name}
                  </option>
                ))}
              </Input>
              <Label for="language">
                <FormattedMessage id="book.language" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={theme}
                id="theme"
                name="theme"
                type="select"
                onChange={(e) => setTheme(e.target.value)}
              >
                {fieldss.map((f) => (
                  <option key={f.key} value={f.key}>
                    {f.name}
                  </option>
                ))}
              </Input>
              <Label for="theme">
                <FormattedMessage id="book.theme" />
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
            <FormGroup>
              <Label for="pdfPath">
                <FormattedMessage id="book.pdfPath" />
              </Label>
              <Input
                id="pdfPath"
                name="pdfPath"
                type="file"
                onChange={changePDFHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="audio">
                <FormattedMessage id="book.audio" />
              </Label>
              <Input
                id="audio"
                name="audio"
                type="file"
                onChange={changeAudioHandler}
              />
            </FormGroup>
            <FormGroup floating>
              <Input
                value={description}
                id="description"
                name="description"
                type="textarea"
                onChange={(e) => setDescription(e.target.value)}
              />
              <Label for="description">
                <FormattedMessage id="book.description" />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            style={{
              backgroundColor: "#b79e56",
              border: 0,
            }}
            onClick={submit}
            disabled={
              !title ||
              !author ||
              !language ||
              !theme ||
              !coverPath ||
              !pdfPath ||
              !audio ||
              !description
            }
          >
            <FormattedMessage id="button.confirm" />
          </Button>{" "}
          <Button
            style={{
              backgroundColor: "lightgray",
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

export default BookAdd;
