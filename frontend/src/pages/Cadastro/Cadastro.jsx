import './cadastro.scss';

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
                            Cadastro
                        </div>

                        <div className='input-fields'>
                            
                            <div>
                                <label>Nome de usuário</label> <br/>
                                <input/>
                            </div>

                            <div>
                                <label>Email</label> <br/>
                                <input/>
                            </div>

                            <div>
                                <label>Senha</label> <br/>
                                <input/>
                            </div>

                            <button style={{width: "10vh"}}>Cadastrar</button>

                        </div>

                    </div>
                </div>
            </div>
        </body>
    )
}