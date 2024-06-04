import './Login.scss';
import Nav from '../../Components/Nav/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/logins');
            const logins = await response.json();

            const user = logins.find(login => login.email === email && login.password === senha);

            if (user) {
                alert('Login bem-sucedido!');
                navigate('/Dash');
            } else {
                alert('Email ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <>  
            <main className='login-page' id='login'>
                <Nav />
                <div className='all-login'>
                    <section className='login-left'>
                        <div className='title-left-login'>
                            <p>INSPIRED BY THE FUTURE</p>
                            <h1>THE VISION UNDER THE OCEAN</h1>
                        </div>
                    </section>

                    <section className='login-right'>
                        <div className="form-login">
                            <div className="title-form-login">
                                <h1>Ótimo te ver!</h1>
                                <p>Entre com seu e-mail e senha</p>
                            </div>
                            <div className="inputs-login">
                                <form id='form-login' onSubmit={handleLogin}>
                                    <div id="input-email">
                                        <label>Email</label>
                                        <input 
                                            type="email" 
                                            placeholder='Insira seu E-mail' 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} 
                                        />
                                    </div>

                                    <div id="input-senha">
                                        <label>Senha</label>
                                        <input 
                                            type="password" 
                                            placeholder='Insira sua senha' 
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)} 
                                        />
                                    </div>

                                    <label className="switch">
                                        <input type="checkbox" className="checkbox" />
                                        <div className="slider"></div>
                                        <h3>Lembrar de mim</h3>
                                    </label>

                                    <div className="button-login">
                                        <button type='submit' id='btn-login'>Entrar</button>
                                    </div>
                                </form>
                                <h4 id='conta'>Não tem conta? <Link className='link' to='/Cadastro'>Registre-se</Link></h4>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
