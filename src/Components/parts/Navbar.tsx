import axios from "axios";
import { useState, ChangeEvent } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";
import IconHome from "../modules/IconHome";
import IconSearch from "../modules/IconSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface NavbardInterfaceProps {
  lang: Function;
}

export default function Navbard(props: NavbardInterfaceProps) {
  const { lang } = props;

  const intl = useIntl();

  const navigate = useNavigate();
  // form states
  const [open, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [search, setSearch] = useState<string>("");

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const changeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const toggleModal = (e: any) => {
    setOpen(!open);
    e.preventDefault();
  };

  const handelClose = () => setOpen(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", { username, password })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        handelClose();
        console.log(data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  }; // function for login admin.

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
    window.location.reload();
  }; // function for logout admin.

  const handleSearch = () => {
    navigate("/booksSearch/" + search);
  }; // for search bar.

  const eye = <FontAwesomeIcon icon={faEye} />;

  return (
    <div className="h-[50px] bg-gray-400">
      <Navbar expand="md" light responsive>
        <NavbarBrand>
          <p className="whitespace-pre-wrap absolute cursor-pointer top-[10px] left-[45px] h-[61px] w-[135px]  font-['Helvetica'] text-2xl leading-[normal] text-left text-white">
            <FormattedMessage id="navbar.title" />
          </p>
          <IconHome />
        </NavbarBrand>

        <Form onSubmit={(e) => e.preventDefault()}>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            className="w-[450px] h-11 absolute top-[3px] left-[270px] rounded-[20px] bg-[#e7eaec] font-['Helvetica']"
            type="text"
            placeholder={intl.formatMessage({ id: "placeholder" })}
          />

          <button onClick={handleSearch}>
            <IconSearch />
          </button>
        </Form>

        <UncontrolledTooltip placement="bottom" target="home">
          Accueil
        </UncontrolledTooltip>

        <Link to="/">
          <img
            id="home"
            className="left-[750px] top-[3px] absolute"
            src="/img/icons/icons8-home-80.png"
            height={35}
            width={40}
            alt="img"
          />
        </Link>

        <UncontrolledTooltip placement="bottom" target="affichageliste">
          Affichage par list
        </UncontrolledTooltip>

        <Link to="/theme5">
          <img
            id="affichageliste"
            className="top-[4px] left-[890px] absolute"
            src="/img/icons/icons8-menu-rounded-50.png"
            alt="img"
            width={37}
          />
        </Link>

        <UncontrolledTooltip placement="bottom" target="affichageicon">
          Affichage par icon
        </UncontrolledTooltip>

        <Link to="/adminpage">
          <img
            id="affichageicon"
            className="top-[4px] left-[960px] absolute"
            src="/img/icons/icons8-grid-view-24.png"
            alt="img"
            width={38}
          />
        </Link>

        <UncontrolledTooltip placement="bottom" target="traduction">
          Traduction
        </UncontrolledTooltip>

        <Nav navbar>
          <UncontrolledDropdown
            className="left-[820px] top-[-3px] absolute"
            inNavbar
            nav
          >
            <DropdownToggle nav>
              <img
                id="traduction"
                src="/img/icons/icons8-globe-50.png"
                alt="img"
                height={30}
                width={36}
              />
            </DropdownToggle>
            <DropdownMenu
              style={{
                backgroundColor: "lightgray",
                height: 65,
                margin: 2,
                padding: 7,
              }}
            >
              <DropdownItem
                onClick={() => {
                  lang("fr");
                }}
              >
                <img
                  src="/img/icons/la-france.png"
                  alt="img"
                  height={20}
                  width={20}
                />
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  lang("en");
                }}
              >
                <img
                  src="/img/icons/royaume-uni.png"
                  alt="img"
                  height={20}
                  width={20}
                />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledTooltip placement="bottom" target="traduction">
            Traduction
          </UncontrolledTooltip>

          {localStorage.getItem("access_token") ? (
            <>
              <UncontrolledDropdown
                className="left-[1030px] top-[-3px] absolute"
                inNavbar
                nav
              >
                <DropdownToggle nav>
                  <UncontrolledTooltip
                    placement="bottom"
                    target="admin-session"
                  >
                    Paramètre-admin
                  </UncontrolledTooltip>

                  <img
                    id="admin-session"
                    src="/img/icons/icons8-administrative-tools-50.png"
                    alt="img"
                    height={33}
                    width={37}
                  />
                </DropdownToggle>
                <DropdownMenu
                  style={{
                    backgroundColor: "lightgray",
                    height: 120,
                    padding: 1,
                  }}
                  className="w-[20px] h-[85px] absolute"
                >
                  <DropdownItem>
                    {" "}
                    <Link
                      to="/adminp2"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <UncontrolledTooltip placement="bottom" target="addbook">
                        +Book
                      </UncontrolledTooltip>
                      <img
                        id="addbook"
                        src="/img/icons/book.png"
                        alt="img"
                        height={20}
                        width={30}
                      />
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to="/adduser2"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <UncontrolledTooltip placement="bottom" target="adduser">
                        +User
                      </UncontrolledTooltip>
                      <img
                        id="adduser"
                        src="/img/icons/add-user.png"
                        alt="img"
                        height={20}
                        width={30}
                      />
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to="/tableml"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <img
                        src="/img/icons/icons8-table-40.png"
                        alt="img"
                        height={20}
                        width={30}
                      />
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </>
          ) : (
            <> </>
          )}
        </Nav>

        {localStorage.getItem("access_token") ? (
          <Button
            className="w-[40px] h-[40px] left-[1220px] top-[-15px] absolute"
            onClick={logout}
            style={{
              backgroundColor: "#e6e1dc00",
              border: "none",
            }}
          >
            <UncontrolledTooltip placement="bottom" target="Déconnexion">
              Déconnexion
            </UncontrolledTooltip>
            <img
              id="Déconnexion"
              className="h-[40px] w-[40px] absolute"
              src="/img/icons/icons8-locked-outside-50.png"
              alt="img"
            />
          </Button>
        ) : (
          <Button
            className="w-[40px] h-[40px] left-[1220px] top-[-17px] absolute"
            onClick={toggleModal}
            style={{
              backgroundColor: "#e6e1dc00",
              border: "none",
            }}
          >
            <UncontrolledTooltip placement="bottom" target="connected">
              Connexion
            </UncontrolledTooltip>
            <img
              id="connected"
              className="h-[40px] w-[40px] absolute"
              src="/img/icons/icons8-locked-inside-50.png"
              alt="img"
            />
          </Button>
        )}
      </Navbar>

      {open ? (
        <Modal centered scrollable isOpen={open} toggle={() => setOpen(false)}>
          <Form onSubmit={(e) => handleLogin(e)}>
            <ModalHeader
              className="font-['Helvetica']"
              toggle={() => setOpen(!open)}
              style={{ backgroundColor: "gray", color: "white" }}
            >
              <FormattedMessage id="modal.title.button.login" />
            </ModalHeader>
            <ModalBody>
              <FormGroup floating>
                <Input
                  value={username}
                  id="username"
                  name="username"
                  type="text"
                  onChange={changeUsername}
                />
                <Label className="font-['Helvetica']" for="username">
                  <FormattedMessage id="user.username" />
                </Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  value={password}
                  id="password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  onChange={changePassword}
                />
                <i
                  className="absolute h-[20px] w-[20px] top-[18px] right-[16px] cursor-pointer"
                  style={{ color: "gray" }}
                  onClick={togglePasswordVisiblity}
                >
                  {eye}
                </i>
                <Label className="font-['Helvetica']" for="password">
                  <FormattedMessage id="user.password" />
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                className="font-['Helvetica']"
                style={{
                  backgroundColor: "gray",
                  border: 0,
                }}
                type="submit"
                disabled={!username || !password}
              >
                <FormattedMessage id="button.confirm" />
              </Button>
              <Button
                className="font-['Helvetica']"
                style={{
                  backgroundColor: "gray",
                  border: 0,
                }}
                onClick={handelClose}
              >
                <FormattedMessage id="button.cancel" />
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
