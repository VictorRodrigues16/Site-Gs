import './Login.scss'

import Nav from '../../Components/Nav/Nav'
import { Link } from 'react-router-dom'


export default function Login(){
    return(
        <>  
            <main className='login-page' id='login'>
                <Nav/>
                <div className='all-login'>
                    <section className='login-left'>
                        <div className='title-left-login'>
                            <p>INSPIRED BY THE FUTURE</p>
                            <h1 >THE VISION UNDER THE OCEAN</h1>
                        </div>
                    </section>

                    <section className='login-right'>
                        <div className="form-login">
                            <div className="title-form-login">
                                <h1>Ótimo te ver!</h1>
                                <p>Entre com seu e-mail e senha</p>
                            </div>
                            <div className="inputs-login">
                                <div id="input-email">
                                    <label>Email</label>
                                    <input type="email" placeholder='Insira seu E-mail' />
                                </div>

                                <div id="input-senha">
                                    <label>Senha</label>
                                    <input type="password" placeholder='Insira sua senha' />
                                </div>

                                <label class="switch">
                                    <input type="checkbox" class="checkbox"/>
                                    <div class="slider"></div>
                                    <h3>Lembrar de mim</h3>
                                </label>
                            </div>
                            <div className="button-login">
                                <button type='submit' id='btn-login'>Entrar</button>
                                <h4>Não tem conta? <Link className='link' to='/Cadastro'>Registre-se</Link></h4>
                                
                            </div>
                            
                        </div>
                    </section>
                </div>
                
            </main>
        </>
    )
}