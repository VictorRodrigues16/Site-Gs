import './Cadastro.scss'
import Nav from '../../Components/Nav/Nav'
import { Link } from 'react-router-dom'

export default function Cadastro(){
    return(
        <>  
            <main className='login-page' id='cadastro'>
                <Nav/>
                <div className='all-login'>
                    <section className='cadastro-left'>
                        <div className='title-left-login'>
                            <p>INSPIRED BY THE FUTURE</p>
                            <h1 >THE VISION ABOVE THE OCEAN</h1>
                        </div>
                    </section>
                    
                    <section className='regis-right'>
                            <div className="title-form-regis alinhar">
                                <h1>Bem vindo</h1>
                                <p>Use esse abaixo formulário para seu login</p>
                            </div>
                        <div className="regis-login">
                            <div className="title-form-regis regis2">
                                <h3>Register with</h3>
                            </div>
                            <div className="inputs-regis">

                                <div id="input-nome">
                                    <label>Nome</label>
                                    <input type="email" placeholder='Insira seu Nome' />
                                </div>

                                <div id="input-email">
                                    <label>Email</label>
                                    <input type="email" placeholder='Insira seu E-mail' />
                                </div>

                                <div id="input-senha">
                                    <label>Senha</label>
                                    <input type="password" placeholder='Insira sua senha' />
                                </div>

                            </div>
                            <div className="button-login">
                                <button type='submit' id='btn-login'>Registrar</button>
                                <h4>Já possui um conta? <Link className='link' to='/Login'>Login</Link></h4>
                            </div>
                            
                        </div>
                    </section>
                </div>
                
            </main>
        </>
    )
}