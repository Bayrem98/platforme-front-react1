import { useEffect, useState } from "react";
import Line1 from "./modules/Line1";
import { ButtonGroup, Container, Table } from "reactstrap";
import { FormattedMessage } from "react-intl";
import UserAdd from "./pages/users/UserAdd";
import { getUsers } from "../action/Users/action";
import UserDelete from "./pages/users/UserDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import User from "../@Types/User";

interface Props {}

const AddUser2 = (props: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers(setUsers); // aka setUsers(data)
  }, []);

  return (
    <div
      className="box-border block left-[245px] w-[1035px] h-[855px] absolute overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <Line1 />

      <p className="whitespace-pre-wrap absolute top-[60px] left-[20px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        <FormattedMessage id="page.title.users" />
      </p>

      <Container className="top-[250px]  absolute">
        <UserAdd refresh={() => getUsers(setUsers)} />

        <Table
          className="left-[170px] w-[700px] absolute font-['Helvetica']"
          bordered
          responsive
          hover
        >
          <thead>
            <tr>
              <th
                className="font-['Helvetica']"
                style={{ color: "#0e0e0ee7", backgroundColor: "lightgray" }}
              >
                <FormattedMessage id="user.username" />
              </th>
              <th
                className="w-[90px] font-['Helvetica']"
                style={{
                  color: "#0e0e0ee7",
                  backgroundColor: "lightgray",
                  textAlign: "center",
                }}
              >
                <FormattedMessage id="user.actions" />
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td
                    className="font-['Helvetica']"
                    style={{
                      color: "#0e0e0ee7",
                      fontSize: 18,
                    }}
                  >
                    {user.username}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <ButtonGroup>
                      <UserDelete
                        user={user}
                        refresh={() => getUsers(setUsers)}
                      />
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center p-5"
                  style={{ color: "#0e0e0ee7" }}
                >
                  <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                  <br />
                  <FormattedMessage id="page.users.no-data" />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AddUser2;
