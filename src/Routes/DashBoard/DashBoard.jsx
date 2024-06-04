import './DashBoard.scss'
import { useState } from 'react';
import Logo from '../../assets/Logo.svg'
import homeIcon from '../../assets/home-icon.svg'
import logout from '../../assets/logout.svg'
import config from '../../assets/config-icon.svg'
import bell from '../../assets/bell-icon.svg'
import phLevel from '../../assets/phLevel.png'
import yearsGraph from '../../assets/yearsGraph.png'
import temperature from '../../assets/temperature-icon.svg'
import luminosity from '../../assets/luminosity-icon.svg'
import ocean from '../../assets/ocean-icon.svg'
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function DashBoard(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogout = () => {
        // Limpar o estado do usuário ou qualquer informação de autenticação
        setEmail('');
        setSenha('');
        alert('Logout bem-sucedido!');
        navigate('/'); // Redirecionar para a página de login ou home
    };
    return(
        <>
            <section id='dash-body'>
                <aside id='nav'>
                    <div id="logo">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <div id="line"></div>

                    <div className="btns">
                        <Link to="/Dash" className='selected'>
                            <img src={homeIcon} alt="Icone azul de casa" />
                            <p>Dashboard</p>
                        </Link>

                        <button onClick={handleLogout} id='logout-btn'>
                            <img src={logout} alt="Icone de foguete" />
                            <p>Logout</p>
                        </button>
                    </div>
                </aside>
                <main id='content'>
                    <div id="title">
                        <h1>Dashboard</h1>
                        <div id="icons">
                            <img src={config} alt="icone de configuração"/>
                            <img src={bell} alt="icone de notificações"/>
                        </div>
                    </div>

                    <div className="cards">
                        <div id="name-card">
                            <p>Bem vindo de volta, <span>Marcelo Melo</span> Feliz em ve-lô novamente!</p>
                        </div>

                        <div id="ph-card">
                            <h2>Nível do pH</h2>
                            <p>PACÍFICO</p>

                            <img id="info-img" src={phLevel} alt="ph level" />
                        </div>

                        <div id="info-card">
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

                            <img id="info-img" src={yearsGraph} alt="years graph" />
                        </div>
                    </div>

                    <div id="info">
                        <div className="info-card" id='temperature-card'>
                            <h2>TEMPERATURA ATUAL</h2>
                            <img id="info-img" src={temperature} alt="icone de termometro"/>
                            <p>Temperatura de 26ºC</p>
                        </div>

                        <div className="info-card" id='luminosity-card'>
                            <h2>LUMINOSIDADE</h2>
                            <img id="info-img" src={luminosity} alt="icone de termometro"/>
                            <p>Luz abaixo de 4 metros</p>
                        </div>

                        <div className="info-card" id='ocean-card'>
                            <h2>OCEANO</h2>
                            <img id="info-img" src={ocean} alt="icone de termometro"/>
                            <p>PACÍFICO</p>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}