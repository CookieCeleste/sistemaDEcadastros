import './login.scss';

export default function Login() {
    return(
        <body>
            <div className='page'>
                <div className='logo'>
                    <img src='src/assets/images/logo.png'/>
                </div>

                <div className='main-block'>
                    <div className='block-content'> 

                        <div className='presentation'>

                            <div>
                                <img height={300} src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_GdbWmck8jaQKQhTYt9dY3srsm8bqDL3_m_QB8OCMCfnO5LonfqsLOKG8arqpTfgzAssUMFCZJ-Q2lxaa2u8kcDjxVOr0e05ouzFXIC7YScekeqh8Z1f8vvKVadIS7fkO9tCn6RhgxBwp/s1600/no+anime+voce+vai+ver+ela+vestida+de+macacao+de+pelucia+uma+hora+e+outra+vestida+de+minisaia+safada.gif'/>
                            </div>

                            <div>
                                Login
                            </div>

                        </div>

                        <div className='input-fields'>
                            
                            <div>
                                <label>Nome de usuário ou Email</label> <br/>
                                <input/>
                            </div>

                            <div>
                                <label>Senha</label> <br/>
                                <input/>
                            </div>

                            <button>Entrar</button>

                        </div>

                        <div>
                            Não tem login? Se cadastre clicando <a href='/'>aqui</a>
                        </div>

                    </div>
                </div>
            </div>
        </body>
    )
}