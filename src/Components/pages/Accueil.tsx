import { useEffect, useState } from "react";
import rectangle71 from "../assets/rectangle71.png";
import unsplashHh4WbgNyltc from "../assets/unsplashHh4WbgNyltc.jpeg";
import unsplashZvKx6IxUhWq from "../assets/unsplashZvKx6IxUhWq.jpeg";
import unsplashS3NUOqDmUvc from "../assets/unsplashS3NUOqDmUvc.jpeg";
import unsplashUhdlN7U87NA from "../assets/unsplashUhdlN7U87NA.jpeg";
import { Link, useParams } from "react-router-dom";
import Book from "../../@Types/Book";
import { getBooks } from "../../action/Books/action";
import Rectangle73 from "../modules/Rectangle73";
import Vector3 from "../modules/Vector3";
import Group10 from "../modules/Group10";
import Line2 from "../modules/Line2";
import { FormattedMessage } from "react-intl";
import { Table } from "reactstrap";
interface props {}

const Accueil = (props: props) => {
  let { them } = useParams(); // params for théme books.
  console.log(them);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks({ theme: them }, setBooks); // aka setBooks(data)
  }, [them]);

  return (
    <div
      className="box-border block left-[-147px] w-[1285px] h-[692px] relative overflow-x-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <p className="whitespace-pre-wrap absolute top-[40px] left-[20px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        tableau mouvement lunaire
      </p>

      <div className="absolute top-[75px] left-[2px]">
        <Table bordered responsive hover>
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
            <tr>
              <td rowSpan={8}>Jan-2023</td>
              <td>Noeud ascendant</td>
              <td>01/01/2023</td>
              <td>16:25</td>
              <td>393 124 Km</td>
              <td>Taureau</td>
              <td>Bélier</td>
            </tr>
            <tr>
              <td>Noeud ascendant</td>
              <td></td>
              <td>16:25</td>
              <td>393 124 Km</td>
              <td>Taureau</td>
              <td>Bélier</td>
            </tr>
            <tr>
              <td>Noeud ascendant</td>
              <td></td>
              <td>16:25</td>
              <td>393 124 Km</td>
              <td>Taureau</td>
              <td>Bélier</td>
            </tr>
            <tr>
              <td>Noeud ascendant</td>
              <td></td>
              <td>16:25</td>
              <td>393 124 Km</td>
              <td>Taureau</td>
              <td>Bélier</td>
            </tr>
            <tr>
              <td>Noeud ascendant</td>
              <td></td>
              <td>16:25</td>
              <td>393 124 Km</td>
              <td>Taureau</td>
              <td>Bélier</td>
            </tr>
            <tr>
              <td>Noeud ascendant</td>
              <td></td>
              <td>16:25</td>
              <td>393 124 Km</td>
              <td>Taureau</td>
              <td>Bélier</td>
            </tr>
            <tr>
              <td>Noeud ascendant</td>
              <td></td>
              <td>16:25</td>
              <td>393 124 Km</td>
              <td>Taureau</td>
              <td>Bélier</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <p className="whitespace-pre-wrap absolute top-[420px] left-[20px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        <FormattedMessage id="title2.acc" />
      </p>

      <p className="whitespace-pre-wrap absolute top-[40px] left-[830px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        <FormattedMessage id="title.acc" />
      </p>

      <div className="w-[234px] h-[234px]">
        <img
          className="w-[234px] h-[234px] absolute top-[500px] left-[50px] rounded-[30px]"
          src={rectangle71}
          alt="theme1rect"
        />
        <img
          className="w-[234px] h-[234px] absolute top-[500px] left-[50px] object-cover rounded-[32px]"
          src={unsplashHh4WbgNyltc}
          alt="theme1"
        />
      </div>
      <div className="w-[234px] h-[234px]">
        <img
          className="w-[234px] h-[234px] absolute top-[500px] left-[350px] rounded-[30px]"
          src={rectangle71}
          alt="img"
        />
        <img
          className="w-[234px] h-[234px] absolute top-[500px] left-[350px] object-cover rounded-[32px]"
          src={unsplashUhdlN7U87NA}
          alt="theme2"
        />
      </div>
      <div className="w-[234px] h-[234px]">
        <div className="w-[234px] h-[234px]">
          <img
            className="w-[234px] h-[234px] absolute top-[500px] left-[650px] rounded-[30px]"
            src={rectangle71}
            alt="img"
          />
        </div>
        <img
          className="w-[234px] h-[234px] absolute top-[500px] left-[650px] object-cover rounded-[32px]"
          src={unsplashZvKx6IxUhWq}
          alt="theme3"
        />
      </div>
      <div className="w-[234px] h-[234px]">
        <img
          className="w-[234px] h-[234px] absolute top-[500px] left-[950px] rounded-[30px]"
          src={rectangle71}
          alt="img"
        />
        <img
          className="w-[234px] h-[234px] absolute top-[500px] left-[950px] object-cover rounded-[32px]"
          src={unsplashS3NUOqDmUvc}
          alt="theme4"
        />
      </div>

      <Rectangle73 />

      {books.map((book) => (
        <div key={book._id}>
          <Link to={"/bookdetails/" + book._id}>
            <img
              className="w-[164px] h-[220px] absolute top-[110px] left-[850px] object-cover"
              style={{
                boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
              }}
              src={book.coverPath}
              alt={book.title}
              key={book._id}
            />
          </Link>
          <p className="whitespace-pre-wrap absolute top-[210px] left-[1030px] w-[207px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
            <span className="whitespace-pre-wrap w-[207px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
              <FormattedMessage id="accueil.title.book1" />
            </span>
          </p>
          <p className="whitespace-pre-wrap absolute top-[270px] left-[1070px] font-['Poppins'] text-sm leading-[normal] tracking-[0.03em] italic text-left capitalize text-[#585757]">
            <FormattedMessage id="accueil.title.book2" />
          </p>
        </div>
      ))}

      <Group10 />
      <Vector3 />
      <p className="whitespace-pre-wrap absolute top-[790px] left-[70px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-black">
        <FormattedMessage id="theme1" />
      </p>
      <p className="whitespace-pre-wrap absolute top-[790px] left-[390px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-black">
        <FormattedMessage id="theme2" />
      </p>
      <p className="whitespace-pre-wrap absolute top-[790px] left-[675px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-black">
        <FormattedMessage id="theme3" />
      </p>
      <p className="whitespace-pre-wrap absolute top-[790px] left-[1040px] font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] italic text-left text-black">
        <FormattedMessage id="theme4" />
      </p>

      <Line2 />
    </div>
  );
};
export default Accueil;
