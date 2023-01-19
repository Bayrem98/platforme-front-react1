import axios from "axios";
import Book from "../../@Types/Book";

export function getBooks(
  query: { title?: string; theme?: string } | null,
  callback: (data: Book[]) => void
) {
  axios
    .get("http://localhost:5000/book", {
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

export function getBook(id: string, callback: (data: Book) => void) {
  axios
    .get("http://localhost:5000/book/" + id, {
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

export function addbook(book: Book, callback: () => void) {
  axios
    .post("http://localhost:5000/book", book)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteBooks(book: Book, callback: () => void) {
  axios
    .delete(`http://localhost:5000/book/${book._id}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
