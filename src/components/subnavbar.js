import '../styles/subnavbar.css'

export function SubNavbar(){
    return(
        <div class='nav_container'>
            <nav class='links_container'>
                <h3>Configurações</h3>
                <div className='link_box'>
                    <a href="#/informacao"><img src='/imgs/user-white.png' alt=''></img> Informações</a>
                </div>
                <div className='link_box'>
                    <a href="#/preferencias"><img src='/imgs/star-white.png' alt=''></img> Preferências</a>
                </div>
                <div className='link_box'>
                    <a href="#/estatistica"><img src='/imgs/statistics-white.png' alt=''></img> Estatisticas</a>
                </div>
            </nav>
        </div>
    );
}