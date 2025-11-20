import { Link } from "react-router-dom";

export function NavBar(){
    return (
        <header class='abc'>
            <div>
                <Link to='/'>Atividades</Link>
                <Link to='/classificacoes'>Classificações</Link>
            </div>
            <div>
                <img src="#" alt="Pfp_img"></img>
                <p>UserName</p>
                <Link to='/profile'></Link>
            </div>
        </header>
        
    );
}