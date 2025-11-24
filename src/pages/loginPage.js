import '../styles/login.css'

export function LoginPage() {
    return (
        <div class='bg_container'>
            <div class='app_name'>
                <img src='imgs/Logo.png' alt='Dailio_Logo'></img>
                <h2>Dailio</h2>
            </div>
            <div class='form_container'>
                <h2>Login</h2>
                <form>
                    <div class='email_container'>
                        <label>Email</label>
                        <input value={'exemplo@gmail.com'}></input>
                    </div>
                    <div class='pass_container'>
                        <label>Password</label>
                        <input value={'password'}></input>
                    </div>
                </form>
            </div>
        </div>
    );
}