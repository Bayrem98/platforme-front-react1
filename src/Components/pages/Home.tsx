import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home">
       <div className="row">
        <div className="col-6">
          <CCard className="mb-3" style={{ height: 150, border: "none" }}>
            <CCardBody style={{ backgroundColor: "lightgray" }}>
              <Link to="/astrologie">
              <CCardTitle
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "rgb(79, 79, 229)",
                  textDecoration: "underline",
                  cursor: "pointer" 
                }}
              >
                <FormattedMessage id="accueil.astro" />
              </CCardTitle>
              </Link>
              <CCardText style={{ textAlign: "center", fontSize: 12 }}>
                <FormattedMessage id="accueil.astro1" />
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
        <div className="col-6">
          <CCardImage
            orientation="bottom"
            src="/330px-Universum astrologie.jpg"
            height={150}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <CCardImage
            orientation="bottom"
            src="/numerologie picture.jpg"
            height={150}
          />
        </div>
        <div className="col-6">
          <CCard className="mb-3" style={{ height: 150, border: "none" }}>
            <CCardBody style={{ backgroundColor: "lightgray" }}>
            <Link to="/numerologie">
              <CCardTitle
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "rgb(79, 79, 229)",
                  textDecoration: "underline",
                  cursor: "pointer" 
                }}
              >
                <FormattedMessage id="accueil.nume" />
              </CCardTitle>
              </Link>
              <CCardText style={{ textAlign: "center", fontSize: 12 }}>
                <FormattedMessage id="accueil.nume1" />
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <CCard className="mb-3" style={{ height: 150, border: "none" }}>
            <CCardBody style={{ backgroundColor: "lightgray" }}>
            <Link to="/tarologie">
              <CCardTitle
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "rgb(79, 79, 229)",
                  textDecoration: "underline",
                  cursor: "pointer" 
                }}
              >
                <FormattedMessage id="accueil.taro" />
              </CCardTitle>
              </Link>
              <CCardText style={{ textAlign: "center", fontSize: 12 }}>
                <FormattedMessage id="accueil.taro1" />
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
        <div className="col-6">
          <CCardImage
            orientation="bottom"
            src="/tarologie picture.jpg"
            height={150}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <CCardImage
            orientation="bottom"
            src="/culture picture.jpg"
            height={150}
            style={{ border: 2}}
          />
        </div>
        <div className="col-6">
          <CCard className="mb-3" style={{ height: 150, border: "none" }}>
            <CCardBody style={{ backgroundColor: "lightgray" }}>
            <Link to="/culturegeneral">
              <CCardTitle
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "rgb(79, 79, 229)",
                  textDecoration: "underline",
                  cursor: "pointer" 
                }}
              >
                <FormattedMessage id="accueil.cult" />
              </CCardTitle>
              </Link>
              <CCardText style={{ textAlign: "center", fontSize: 12 }}>
                <FormattedMessage id="accueil.cult1" />
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
}
export default Home;
