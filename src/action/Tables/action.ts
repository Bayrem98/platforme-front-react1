import axios from "axios";
import Tablee from "../../@Types/Table";

export function getTables(
  query: { date?: string } | null,
  callback: (data: Tablee[]) => void
) {
  axios
    .get("http://localhost:5000/table", {
      params: query,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function getTable(id: string, callback: (data: Tablee) => void) {
  axios
    .get("http://localhost:5000/table/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addtable(table: Tablee, callback: () => void) {
  axios
    .post("http://localhost:5000/table", table)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteTables(table: Tablee, callback: () => void) {
  axios
    .delete(`http://localhost:5000/table/${table._id}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
