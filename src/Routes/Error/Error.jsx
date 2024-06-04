import {} from "react";
import { Link } from "react-router-dom";
import './Error.scss' 
import errorImg from '../../assets/errorImg.png'

export default function Error() {
    return (
      <>
      <section className="format-page">
        <img src={errorImg} alt="errorMsg" />
        <h1>404 - PAGE NOT FOUND... PLEASE TRY AGAIN!</h1>
        <Link to="/" className="return-btn">
          RETURN TO LOGIN
        </Link>
      </section>
      </>
    );
  }