import '../styles/homepage.css'

export function Home() {
    return (
        <div class='content_container'>
            <div>
                <div class="hero-image">
                    <div class="hero-text">
                        <h1 class="big-tittles">Dailio</h1> <h1 class="small-tittles"> a tua dose diária de entretenimento!!!</h1>
                        <p class="small-tittles-normal">A Dailio é uma aplicação que disponibiliza atividades diárias de todos os tipos, para que possa experienciar as diversas coisas que existem no mundo.</p>
                        <a src=""><button class="comic-button">Ver as novas atividades!</button></a>
                    </div>
                </div>
            </div>
            <div class="activity_bullet_list">
                <div>
                    <p>Nós disponibilizamos <strong>+200 atividades</strong> para todos os gostos, tais como:</p>
                    <ul>
                        
                        <li>
                            Cozinhar, Desenhar, Praticar desportos, Escrever, ...
                        </li>
                        <li>
                            Visitar/Explorar locais e culturas
                        </li>
                        <li>
                            Aprender novos instrumentos/hobbies
                        </li>
                        <li>
                            Socializar com amigos, grupos, desconhecidos
                        </li>
                        <li>
                            Atividades produtivas, de lazer e novas experiências
                        </li>
                        <li>
                            E muito mais
                        </li>
                    </ul>
                    <p> Depois de fazer a atividade, marca como feita e verifica as atividades das outras pesssoas!</p>
                    <p> E para os mais dedicados, os com mais atividades são destacados no nosso <a href="#/classificacao"><strong>leaderboard</strong></a></p>
                </div>
                <div>
                    <img src="/imgs/varias_atividades.png"></img>
                </div>
            </div>
            <div class="green_background">
                <div class="spaced_container">
                    <p class="medium-tittles">Algumas estatísticas da nossa aplicação:</p>
                    <div class="percentages_homepage">
                        <div>
                            <h1>Número de utilizadores:</h1>
                            <p><strong>42069 Utilizadores</strong></p>
                        </div>
                        <div>
                            <h1>Percentagem de satisfação:</h1>
                            <p><strong>90%</strong></p>
                        </div>
                        <div>
                            <h1>Número de atividades:</h1>
                            <p><strong>204 Atividades</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="small-tittles"> Do que estás à espera? Começa a ser ativo hoje!!!</p>
            <div>
                <h1 class="medium-tittles">Atividades para Hoje (nºAtividades)</h1>
                <div class="container-activities">
                    {/* Java Script para pegar as coisas da base de dados e criar os elementos no html*/}
                    <div class='activity'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Atividade 1 - Descrição da atvidade</p>
                            </div>
                            <div class='etc_container'>
                                <div class='etc_f_container'>
                                    <div class='gc_container'>
                                        <img src='/imgs/people_white.png' alt='people'></img>
                                        <p>1</p>
                                    </div>
                                    <div class='gc_container'>
                                        <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                        <p>Few to no challenges</p>
                                    </div>
                                </div>
                                <div class="btn_container">
                                    <button type='submit' class="comic-button">Concluir Atividade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='activity'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Atividade 1 - Descrição da atvidade</p>
                            </div>
                            <div class='etc_container'>
                                <div class='etc_f_container'>
                                    <div class='gc_container'>
                                        <img src='/imgs/people_white.png' alt='people'></img>
                                        <p>1</p>
                                    </div>
                                    <div class='gc_container'>
                                        <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                        <p>Few to no challenges</p>
                                    </div>
                                </div>
                                <div class="btn_container">
                                    <button type='submit' class="comic-button">Concluir Atividade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div >
                <p class="small-tittles">Não gostou das suas atividades? Nós também temos:</p>
                <h1 class="medium-tittles">Atividades Recomendadas</h1>
                <div class="container-activities">
                    <div class='activity'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Atividade 1 - Descrição da atvidade</p>
                            </div>
                            <div class='etc_container'>
                                <div class='etc_f_container'>
                                    <div class='gc_container'>
                                        <img src='/imgs/people_white.png' alt='people'></img>
                                        <p>1</p>
                                    </div>
                                    <div class='gc_container'>
                                        <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                        <p>Few to no challenges</p>
                                    </div>
                                </div>
                                <div class="btn_container">
                                    <button type='submit' class="comic-button">Concluir Atividade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='activity'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Atividade 1 - Descrição da atvidade</p>
                            </div>
                            <div class='etc_container'>
                                <div class='etc_f_container'>
                                    <div class='gc_container'>
                                        <img src='/imgs/people_white.png' alt='people'></img>
                                        <p>1</p>
                                    </div>
                                    <div class='gc_container'>
                                        <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                        <p>Few to no challenges</p>
                                    </div>
                                </div>
                                <div class="btn_container">
                                    <button type='submit' class="comic-button">Concluir Atividade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='activity'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Atividade 1 - Descrição da atvidade</p>
                            </div>
                            <div class='etc_container'>
                                <div class='etc_f_container'>
                                    <div class='gc_container'>
                                        <img src='/imgs/people_white.png' alt='people'></img>
                                        <p>1</p>
                                    </div>
                                    <div class='gc_container'>
                                        <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                        <p>Few to no challenges</p>
                                    </div>
                                </div>
                                <div class="btn_container">
                                    <button type='submit' class="comic-button">Concluir Atividade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div >
                <p class="small-tittles">Além das atividades anteriores, que tal exprimentar algo diferente:</p>
                <h1 class="medium-tittles">Outras Atividades</h1>
                <div class="container-activities">
                    <div class='activity'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Atividade 1 - Descrição da atvidade</p>
                            </div>
                            <div class='etc_container'>
                                <div class='etc_f_container'>
                                    <div class='gc_container'>
                                        <img src='/imgs/people_white.png' alt='people'></img>
                                        <p>1</p>
                                    </div>
                                    <div class='gc_container'>
                                        <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                        <p>Few to no challenges</p>
                                    </div>
                                </div>
                                <div class="btn_container">
                                    <button type='submit' class="comic-button">Concluir Atividade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='activity'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Atividade 1 - Descrição da atvidade</p>
                            </div>
                            <div class='etc_container'>
                                <div class='etc_f_container'>
                                    <div class='gc_container'>
                                        <img src='/imgs/people_white.png' alt='people'></img>
                                        <p>1</p>
                                    </div>
                                    <div class='gc_container'>
                                        <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                        <p>Few to no challenges</p>
                                    </div>
                                </div>
                                <div class="btn_container">
                                    <button type='submit' class="comic-button">Concluir Atividade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='activity'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Atividade 1 - Descrição da atvidade</p>
                            </div>
                            <div class='etc_container'>
                                <div class='etc_f_container'>
                                    <div class='gc_container'>
                                        <img src='/imgs/people_white.png' alt='people'></img>
                                        <p>1</p>
                                    </div>
                                    <div class='gc_container'>
                                        <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                        <p>Few to no challenges</p>
                                    </div>
                                </div>
                                <div class="btn_container">
                                    <button type='submit' class="comic-button">Concluir Atividade</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}