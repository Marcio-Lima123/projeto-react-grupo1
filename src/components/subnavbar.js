import '../styles/subnavbar.css'

export function SubNavbar(){
    return(
        <div class='nav_container'>
            <nav class='links_container'>
                <h3>Configurações</h3>
                <div class='link_box'>
                    <a href="#/informacao"><img src='/imgs/' alt=''></img> Informaçôes</a>
                </div>
                <div class='link_box'>
                    <a href="#/preferencias"><img src='/imgs/star.png' alt=''></img> Preferências</a>
                </div>
                <div class='link_box'>
                    <a href="#/estatisticas"><img src='/imgs/' alt=''></img> Estatisticas</a>
                </div>
            </nav>
        </div>
    );
}