import '../styles/login.css'
export function RegisterPage(){
    return (
        <div class='bg_container'>
            <div class='ap_name'>
                <img src='imgs/Logo.png' alt='Dailio_Logo'></img>
                <h1>Dailio</h1>
            </div>
            <div class='form_container'>
                <h2>Registar</h2>
                <form class='log_container'>
                    <div class='ep_container'>
                        <label>Email</label>
                        <input class='ipt_ep' placeholder={'exemplo@gmail.com'}></input>
                    </div>
                    <div class='ep_container'>
                        <label>Password</label>
                        <input class='ipt_ep' placeholder={'password'}></input>
                    </div>
                    <div class='btn_logIn ep_container'>
                        <input class='btn_enter' type='submit' value={'Registar'}></input>
                        <div class='reg_container'>
                            <label>Já tem conta?</label>
                            <a class='btn_enter' href='#/login'>Fazer Login</a>
                            {/* <input class='btn_enter' type='button' value={'Entrar'}  ></input> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}