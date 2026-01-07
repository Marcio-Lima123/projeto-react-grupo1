import '../styles/navbar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export function NavBar() {

    const navigate = useNavigate();

    const [token, setToken] = useState();

    //dados do utilizador a mais tarde vir do login
    const [user, setUser] = useState({
        email: "loading...",
        nome: "username",
        foto: null,
        localizacao: "loading...",
    });
    const [isLoggedIn, setIsLoggedIn] = useState(!user);

    // Quando houver login
    useEffect(() => {
        const saveUser = localStorage.getItem("user");

        if (saveUser) {
            setUser(JSON.parse(saveUser));
            setToken(localStorage.getItem("token"));
            setIsLoggedIn(!!user);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser({
            email: "loading...",
            nome: "username",
            foto: null,
            localizacao: "loading...",
        });
        setIsLoggedIn(!user);
        navigate("/login")
    }

    return (
        <header>
            <div className='left_side'>
                <div className='ap_container'>
                    <div className='app_logo'>
                        <img className='logo_png' src='imgs/Logo.png' alt="logo"></img>
                    </div>
                    <div className='app_name'>
                        <h2 className="logo_name">Dailio</h2>
                    </div>
                </div>
                <div className='ac_container'>
                    <div className='route_container'>
                        <a className='routes route_a' href='/'><button className="comic-button-nav">Atividades</button></a>
                        <div className='route_h'></div>
                    </div>
                    <div className='route_container'>
                        <a className='routes route_a' href='#/classificacao'><button className="comic-button-nav">Classificações</button></a>
                        <div className='route_h'></div>
                    </div>
                </div>
            </div>
            <div className='us_menu_container'>
                <div className='us_menu'>
                    <img className='user_logo' src="/imgs/user.png" alt="Pfp_img"></img>
                    <p className="logo_name">{user.nome}</p>
                    <div className='dd_menu_container'>
                        <button className='btn_logs'><img className='logs' src="imgs/menu2.png" alt="menu"></img></button>
                        <div className='dd_container'>
                            <div className='t_menu'></div>
                            {isLoggedIn && (
                                <div className='dd_menu' target='#dd_menu'>
                                    <div className='menu_tab'>
                                        <a href='#/informacao'><img className='logs_menu' src="imgs/settings.png" alt="config"></img>Configurações</a>
                                    </div>
                                    <div className='menu_tab'>
                                        <a href='#/login' onClick={(e) => {e.preventDefault();handleLogout();}}><img className='logs_menu' src="imgs/log-out.png" alt="sair"></img>Sair</a>
                                    </div>
                                </div>
                            )}
                            {!isLoggedIn && (
                                <div className='dd_menu' target='#dd_menu'>
                                    <div className='menu_tab'>
                                        <a href="#/login">Login</a>
                                    </div>
                                    <div className='menu_tab'>
                                        <a href="#/register">Register</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}