import { useState } from 'react';

import LoginAdm from '../../assets/images/loginADM.gif'

export default function LoginAdmin() {

    const [formData, setFormData] = useState({
            email: "",
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
            <div style={{color: "red"}} className='login-page'>

                <a href='/'>
                    <img width={30} height={30} src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-page-white-icon.png'/>
                </a>
                
                <div className='login-main-block'>
                    <div className='login-block-content'> 

                        <div className='login-presentation'>

                            <div>
                                <img height={300} src={LoginAdm}/>
                            </div>

                            <div>
                                ADMIN
                            </div>

                        </div>

                        <form onSubmit={handleSubmit} className='login-input-fields'>

                            <div>
                                <label>Email</label> <br/>
                                <input type='email' name='email' value={formData.email} onChange={handleChange}/>
                            </div>

                            <div>
                                <label>Senha</label> <br/>
                                <input type='password' name='senha' value={formData.senha} onChange={handleChange}/>
                            </div>

                            <button type='submit' style={{width: "10vh"}}>Entrar</button>

                        </form>

                    </div>
                </div>
            </div>
        </main>
    )
}