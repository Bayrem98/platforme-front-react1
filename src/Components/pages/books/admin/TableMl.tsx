import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import { Container, Table, } from "reactstrap";
import Tablee from "../../../../@Types/Table";
import { getTables } from "../../../../action/Tables/action";
import Line1 from "../../../modules/Line1";
import TableAdd from "./TableAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const TableMl = (props: Props) => {
  const [tables, setTables] = useState<Tablee[]>([]); // form state for books.

  useEffect(() => {
    getTables(null, setTables); // aka setBooks(data)
  }, []);

  return (
    <div
      className="box-border block left-[-147px] w-[1285px] h-[692px] relative overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
       <Line1 />

<p className="whitespace-pre-wrap absolute top-[60px] left-[20px] font-['Helvetica'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
  <FormattedMessage id="page.title.books" />
</p>

<Container className="top-[130px] absolute">
  <TableAdd refresh={() => getTables(null, setTables)} />
      
      <Table className="top-[200px] relative" bordered hover>
        <thead style={{ backgroundColor: "lightgray" }}>
          <tr>
            <th>Mois</th>
            <th>Phase Lunaire</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Distance(Terre-Lune)</th>
            <th>Signe</th>
            <th>Constellation Zodiaque</th>
          </tr>
        </thead>
        <tbody>
        {tables.length ? (
              tables.map((table) => (
                <tr key={table._id}>
            <td rowSpan={8}>Jan-2023</td>
            <td>Noeud ascendant</td>
            <td>01/01/2023</td>
            <td>16:25</td>
            <td>393 124 Km</td>
            <td>Taureau</td>
            <td>Bélier</td>
          </tr>
           ))
           ) : (
             <tr>
               <td
                 colSpan={7}
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
