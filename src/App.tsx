import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/parts/Sidebar";
import Navbard from "./Components/parts/Navbar";
import PdfFiles from "./Components/pages/PdfFiles";
import Accueil from "./Components/pages/Accueil";
import SearchBooks from "./Components/pages/books/SearchBooks";
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import AddUser2 from "./Components/AddUser2";
import BookDetails from "./Components/BookDetails";
import AdminPage from "./Components/AdminPage";
import Theme5 from "./Components/Theme5";
import AdminP2 from "./Components/AdminP2";
import TableMl from "./Components/pages/books/admin/TableMl";

interface Messages {
  "login.title": string;
  "login.subtitle": string;
}
interface I18n {
  en: Record<string, string>;
  fr: Record<string, string>;
}

let allMessages: I18n = { en, fr };
const userLang: string = navigator.language.slice(0, 2);
// @ts-ignore
let messages: Record<string, string> = allMessages[userLang];

function App() {
  const [language, setLanguage] = useState<string>("fr");

  const lang = (payload: string) => {
    setLanguage(payload);
    // @ts-ignore
    messages = allMessages[payload];
  };

  return (
    <>
      <IntlProvider messages={messages} locale={language} defaultLocale="en">
        <Navbard lang={lang} />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <Sidebar />
            </div>
            <div className="col-12 col-md-9">
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/bookdetails/:bookId" element={<BookDetails />} />
                <Route path="/adminpage/:them" element={<AdminPage />} />
                <Route path="/adminpage" element={<AdminPage />} />
                <Route path="/adduser2" element={<AddUser2 />} />
                <Route path="/adminp2" element={<AdminP2 />} />
                <Route path="/pdffiles/:bookId" element={<PdfFiles />} />
                <Route path="/theme5" element={<Theme5 />} />
                <Route path="/booksSearch/:search" element={<SearchBooks />} />
                <Route path="/tableml" element={<TableMl />} />
              </Routes>
            </div>
          </div>
        </div>
      </IntlProvider>
    </>
  );
}
export default App;
