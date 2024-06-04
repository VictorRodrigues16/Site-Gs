import './Cadastro.scss';
import Nav from '../../Components/Nav/Nav';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }

        if(nome == '' || email == '' || senha == '' || confirmarSenha == ''){
            alert('Preencha todos os campos!')
            return
        }

        const newUser = {
            id: uuidv4(),
            username: nome,
            email,
            password: senha
        };

        try {
            const response = await fetch('http://localhost:3000/logins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            if (response.ok) {
                alert('Usuário registrado com sucesso!');
                // Redirecionar para a página de login ou limpar o formulário
                setNome('');
                setEmail('');
                setSenha('');
                setConfirmarSenha('');
            } else {
                alert('Erro ao registrar usuário');
            }
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    };

    return (
        <>  
            <main className='login-page' id='cadastro'>
                <Nav />
                <div className='all-login'>
                    <section className='cadastro-left'>
                        <div className='title-left-login'>
                            <p>INSPIRED BY THE FUTURE</p>
                            <h1>THE VISION ABOVE THE OCEAN</h1>
                        </div>
                    </section>
                    
                    <section className='regis-right'>
                        <div className="title-form-regis alinhar">
                            <h1>Bem vindo</h1>
                            <p>Use esse formulário abaixo para realizar seu cadastro</p>
                        </div>
                        <div className="regis-login">
                            <div className="title-form-regis regis2">
                                <h3 id='conta'>Insira seus dados</h3>
                            </div>
                            <div className="inputs-regis">
                                <form id='form-regis' onSubmit={handleRegister}>
                                    <div id="input-nome">
                                        <label>Nome</label>
                                        <input 
                                            type="text" 
                                            placeholder='Insira seu Nome'
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)} 
                                        />
                                    </div>
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
                                    <div id="input-senha">
                                        <label>Confirmar Senha</label>
                                        <input 
                                            type="password" 
                                            placeholder='Insira sua senha novamente'
                                            value={confirmarSenha}
                                            onChange={(e) => setConfirmarSenha(e.target.value)} 
                                        />
                                    </div>
                                    <div className="button-login">
                                        <button type='submit' id='btn-login'>Registrar</button>
                                    </div>
                                </form>
                                <h4 id='conta'>Já possui uma conta? <Link className='link' to='/'>Login</Link></h4>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
