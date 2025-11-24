import '../styles/login.css'

export function LoginPage() {
    return (
        <div class='bg_container'>
            <div class='ap_name'>
                <img src='imgs/Logo.png' alt='Dailio_Logo'></img>
                <h1>Dailio</h1>
            </div>
            <div class='form_container'>
                <h2>Login</h2>
                <form class='log_container'>
                    <div class='ep_container'>
                        <label>Email</label>
                        <input value={'exemplo@gmail.com'}></input>
                    </div>
                    <div class='ep_container'>
                        <label>Password</label>
                        <input value={'password'}></input>
                    </div>
                    <div class='btn_logIn ep_container'>
                        <input value={'Entrar'}></input>
                        <div class='reg_container'>
                            <label>Não tem conta?</label>
                            <input type='submit' value={'Registar'}></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}