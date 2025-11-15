import './login.scss';

import { useState } from 'react';

export default function Login() {

    const [formData, setFormData] = useState({
            login: "",
            senha: ""
        });
    
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            console.log(formData);
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const dataToSend = {
            ...formData,
            };
            let response = await api.post("/login", dataToSend);
        };
    
    return(
        <main>
            <div className='login-page'>
                <div className='login-logo'>
                    <img src='src/assets/images/logo.png'/>
                </div>

                <div className='login-main-block'>
                    <div className='login-block-content'> 

                        <div className='login-presentation'>

                            <div>
                                <img height={300} src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_GdbWmck8jaQKQhTYt9dY3srsm8bqDL3_m_QB8OCMCfnO5LonfqsLOKG8arqpTfgzAssUMFCZJ-Q2lxaa2u8kcDjxVOr0e05ouzFXIC7YScekeqh8Z1f8vvKVadIS7fkO9tCn6RhgxBwp/s1600/no+anime+voce+vai+ver+ela+vestida+de+macacao+de+pelucia+uma+hora+e+outra+vestida+de+minisaia+safada.gif'/>
                            </div>

                            <div>
                                Login
                            </div>

                        </div>

                        <form onSubmit={handleSubmit} className='login-input-fields'>

                            <div>
                                <label>Nome de usuário ou Email</label> <br/>
                                <input type='text' name='login' value={formData.username} onChange={handleChange}/>
                            </div>

                            <div>
                                <label>Senha</label> <br/>
                                <input type='password' name='senha' value={formData.email} onChange={handleChange}/>
                            </div>

                            <button type='submit' style={{width: "10vh"}}>Entrar</button>

                        </form>

                        <div>
                            Não tem login? Se cadastre clicando <a href='/'>aqui</a>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}