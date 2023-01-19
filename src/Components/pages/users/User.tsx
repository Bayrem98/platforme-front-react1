import { useEffect, useState } from "react";
import { ButtonGroup, Container, Table } from "reactstrap";
import UserAdd from "./UserAdd";
import UserDelete from "./UserDelete";
import User from "../../../@Types/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { getUsers } from "../../../action/Users/action";
import { FormattedMessage } from "react-intl";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers(setUsers); // aka setUsers(data)
  }, []);

  return (
    <>
      <Container>
        <div
          className="d-flex justify-content-between userst"
          style={{
            color: "#0e0e0ee7",
            fontSize: 30,
            textShadow: "1px 1px 0 #000",
          }}
        >
          <FormattedMessage id="page.title.users" />
          <UserAdd refresh={() => getUsers(setUsers)} />
        </div>
        <Table className="userst" bordered responsive>
          <thead>
            <tr>
              <th style={{ color: "#0e0e0ee7" }}>
                <FormattedMessage id="user.username" />
              </th>
              <th style={{ color: "#0e0e0ee7" }}>
                <FormattedMessage id="user.actions" />
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td
                    style={{
                      color: "#0e0e0ee7",
                      fontSize: 18,
                      textShadow: "1px 1px 0 #000",
                    }}
                  >
                    {user.username}
                  </td>
                  <td>
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
    </>
  );
};

export default Users;
