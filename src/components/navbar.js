import '../styles/navbar.css';

export function NavBar() {
    return (
        <header>
            <div class='left_side'>
                <div class='ap_container'>
                    <div class='app_logo'>
                        <img class='logo_png' src='imgs/Logo.png' alt="logo"></img>
                    </div>
                    <div class='app_name'>
                        <h2 class="logo_name">Dailio</h2>
                    </div>
                </div>
                <div class='ac_container'>
                    <div class='route_container'>
                        <a class='routes route_a' href='/'><button class="comic-button-nav">Atividades</button></a>
                        <div class='route_h'></div>
                    </div>
                    <div class='route_container'>
                        <a class='routes route_a' href='#/classificacao'><button class="comic-button-nav">Classificações</button></a>
                        <div class='route_h'></div>
                    </div>
                </div>
            </div>
            <div class='us_menu_container'>
                <div class='us_menu'>
                    <img class='user_logo' src="imgs/user.png" alt="Pfp_img"></img>
                    {/* adicionar javascript para ir buscar o log in */}
                    <p class="logo_name">Username</p>
                    <div class='dd_menu_container'>
                        <button class='btn_logs'><img class='logs' src="imgs/menu2.png" alt="menu"></img></button>
                        <div class='dd_container'>
                            <div class='t_menu'></div>
                            <div class='dd_menu' target='#dd_menu'>
                                <div class='menu_tab'>
                                    <a href='#/informacao'><img class='logs_menu' src="imgs/settings.png" alt="config"></img>Configurações</a>
                                </div>
                                <div class='menu_tab'>
                                    <a href='#/login'><img class='logs_menu' src="imgs/log-out.png" alt="sair"></img>Sair</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}