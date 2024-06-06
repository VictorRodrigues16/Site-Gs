import "./DashBoard.scss";
import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import homeIcon from "../../assets/home-icon.svg";
import logout from "../../assets/logout.svg";
import config from "../../assets/config-icon.svg";
import bell from "../../assets/bell-icon.svg";
import phLevel from "../../assets/phLevel.png";
import yearsGraph from "../../assets/yearsGraph.png";
import temperature from "../../assets/temperature-icon.svg";
import luminosity from "../../assets/luminosity-icon.svg";
import ocean from "../../assets/ocean-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function DashBoard() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [username, setUsername] = useState("");
  const [infos, setInfos] = useState([]);
  const navigate = useNavigate();


  const handleLogout = () => {
    setEmail("");
    setSenha("");
    alert("Logout bem-sucedido!");
    navigate("/");
  };

  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInUser");

    if (!loggedInEmail) {
      navigate("/");
      return;
    }

    fetch("http://localhost:1880/oceaninfo")
      .then((data) => data.json())
      .then((data) => {
        const oceanData = data.infos[0];
        setInfos(oceanData);
      });

    fetch("http://localhost:3000/logins")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === loggedInEmail);
        if (user) {
          setUsername(user.username);
        }
      })
      .catch((error) =>
        console.error("Erro ao buscar os dados do usuário:", error)
      );
  }, []);

  return (
    <>
      <section id="dash-body">
        <aside id="nav">
          <div id="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div id="line"></div>

          <div className="btns">
            <Link to="/Dash" className="selected">
              <img src={homeIcon} alt="Icone azul de casa" />
              <p>Dashboard</p>
            </Link>

            <button onClick={handleLogout} id="logout-btn">
              <img src={logout} alt="Icone de foguete" />
              <p>Logout</p>
            </button>
          </div>
        </aside>
        <main id="content">
          <div id="title">
            <h1>Dashboard</h1>
            <div id="icons">
              <img src={config} alt="icone de configuração" />
              <img src={bell} alt="icone de notificações" />
            </div>
          </div>

          <div className="cards">
            <div id="name-card">
              <p>
                Bem vindo de volta, <span>{username}</span> Feliz em ve-lô
                novamente!
              </p>
            </div>

            <div id="ph-card">
              <h2>Nível do pH</h2>
              <p>PACÍFICO</p>

              <img src={phLevel} alt="ph level" />
            </div>

            <Carousel showStatus={false} showThumbs={false}>
              <div id="ocean-info-card">
                <div id="text">
                  <div id="news">
                    <p>Plástico no mar</p>
                    <h2>170 trilhões de partículas de plástico</h2>
                  </div>
                  <div id="news">
                    <p>Plástico destinado ao mar por ano</p>
                    <h2>3,44 milhões de toneladas</h2>
                  </div>
                </div>

                <img src={yearsGraph} alt="icone de termometro" />
              </div>

              <div id="ocean-info-card">
                <div id="text">
                  <div id="news">
                    <p>Plástico no mar</p>
                    <h2>170 trilhões de partículas de plástico</h2>
                  </div>
                  <div id="news">
                    <p>Plástico destinado ao mar por ano</p>
                    <h2>3,44 milhões de toneladas</h2>
                  </div>
                </div>

                <img src={yearsGraph} alt="icone de termometro" />
              </div>
            </Carousel>
          </div>

          <div id="info">
            <div className="info-card" id="temperature-card">
              <h2>TEMPERATURA ATUAL</h2>
              <img id="info-img" src={temperature} alt="icone de termometro" />
              <p>Temperatura de {infos.temp}</p>
            </div>

            <div className="info-card" id="luminosity-card">
              <h2>LUMINOSIDADE</h2>
              <img id="info-img" src={luminosity} alt="icone de termometro" />
              <p>Luz abaixo de {infos.luz}</p>
            </div>

            <div className="info-card" id="ocean-card">
              <h2>{infos.oceano}</h2>
              <img id="info-img" src={ocean} alt="icone de termometro" />
              <p>PACÍFICO</p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
