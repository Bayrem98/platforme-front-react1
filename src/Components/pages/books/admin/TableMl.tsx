import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import { ButtonGroup, Container, Table } from "reactstrap";
import Tablee from "../../../../@Types/Table";
import { getTables } from "../../../../action/Tables/action";
import Line1 from "../../../modules/Line1";
import TableAdd from "./TableAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import TableDelete from "./TableDelete";
interface Props {}

const TableMl = (props: Props) => {
  const [tables, setTables] = useState<Tablee[]>([]); // form state for books.

  useEffect(() => {
    getTables(null, setTables); // aka setBooks(data)
  }, []);

  return (
    <div
      className="box-border block left-[245px] w-[1035px] h-[822px] absolute overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <Line1 />

      <p className="whitespace-pre-wrap absolute top-[40px] left-[20px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#b79e56]">
        <FormattedMessage id="page.title.tables" />
      </p>

      <Container className="top-[90px] absolute">
        <TableAdd refresh={() => getTables(null, setTables)} />

        <p className="absolute left-[40px]" style={{ color: "red" }}>
          <FormattedMessage id="page.title2.tables" />
        </p>
        <img className="absolute left-[10px] top-[-5px]" src="/img/icons/img-table/attention.png" alt="img" width={30} />
        <br />

        <Table
          className="relative top-[30px] font-['Helvetica']"
          bordered
          hover
        >
          <thead style={{ backgroundColor: "lightgray" }}>
            <tr>
              <th style={{ textAlign: "center" }}>
                <FormattedMessage id="acc.table.mois" />
              </th>
              <th style={{ textAlign: "center" }}>
                <FormattedMessage id="acc.table.Phase" />
              </th>
              <th style={{ textAlign: "center" }}>
                <FormattedMessage id="acc.table.date" />
              </th>
              <th style={{ textAlign: "center" }}>
                <FormattedMessage id="acc.table.signe" />
              </th>
              <th style={{ textAlign: "center", width: 60 }}>
                <FormattedMessage id="book.coverpath" />
              </th>
              <th
                className="font-['Helvetica']"
                style={{
                  color: "#0e0e0ee7",
                  backgroundColor: "lightgray",
                  textAlign: "center",
                }}
              >
                <FormattedMessage id="book.actions" />
              </th>
            </tr>
          </thead>
          <tbody>
            {tables.length ? (
              tables.map((table) => (
                <tr key={table._id}>
                  <td style={{ textAlign: "center" }}>{table.mois}</td>
                  <td style={{ textAlign: "center" }}>{table.phaseLun}</td>
                  <td style={{ textAlign: "center" }}>{table.date}</td>
                  <td style={{ textAlign: "center" }}>{table.signe}</td>
                  <td style={{ textAlign: "center" }}>
                    <img
                      style={{ alignItems: "center" }}
                      src={table.coverPath}
                      alt=""
                      width={50}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <ButtonGroup>
                      <TableDelete
                        table={table}
                        refresh={() => getTables(null, setTables)}
                      />
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={8}
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

export default TableMl;
