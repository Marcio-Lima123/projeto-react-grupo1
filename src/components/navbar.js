import { Link } from "react-router-dom";
import '../styles/navbar.css';

export function NavBar(){
    return (
        <header>
            <div class='ap_container'>
                <div class='app_logo'>
                    {/* <img src="#" alt="App_name"></img> */}
                </div>
                <p>Dailio</p>
            </div>
            <div class='ac_container'>
                <Link to='/daily_activity'>Atividades</Link>
                <Link to='/classificacoes'>Classificações</Link>
            </div>
            <div class='us_menu_container'>
                <div class='us_menu'>
                    <img src="#" alt="Pfp_img"></img>
                    <p>UserName</p>
                    <a href="#dd_menu">Menu H</a>
                </div>
                <div class='dd_menu' target='#dd_menu'>
                    <div class='menu_tab'>
                        <img alt="Img "></img>
                        <a href='/preferencias'>Preferências</a>
                    </div>
                    <div class='menu_tab'>
                        <img alt="Img "></img>
                        <a href='/configuracoes'>Configurações</a>
                    </div>
                    <div class='menu_tab'>
                        <img alt="Img "></img>
                        <a href='/sair'>Sair</a>
                    </div>
                </div>
            </div>
        </header>
        
    );
}