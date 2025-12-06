import '../styles/homepage.css'

export function Home() {
    return (
        <div class='content_container'>
            {/* Imagem com texto dentro da Homepage, designação de image-hero */}
            <div class="image-hero">
                <div class="text-hero">
                    <h1 class="text-size-big-Rantaro">Dailio</h1> <h1 class="text-size-small-Rantaro"> a tua dose diária de entretenimento!!!</h1>
                    <p class="text-size-small">A Dailio é uma aplicação que disponibiliza atividades diárias de todos os tipos, para que possa experienciar as diversas coisas que existem no mundo.</p>
                    <a src=""><button class="button-comic">Ver as novas atividades!</button></a>
                </div>
            </div>
            {/* Lista de bullet points para chamar a atenção do utilizador com os vários tipos de atividades existentes */}
            <div class="container-activity-bullet_list">
                <div>
                    <p>Nós disponibilizamos<strong>+200 atividades </strong>para todos os gostos, tais como:</p>
                    <ul>
                        <li>Cozinhar, Desenhar, Praticar desportos, Escrever, ...</li>
                        <li>Visitar/Explorar locais e culturas</li>
                        <li>Aprender novos instrumentos/hobbies</li>
                        <li>Socializar com amigos, grupos, desconhecidos</li>
                        <li>Atividades produtivas, de lazer e novas experiências</li>
                        <li>E muito mais</li>
                    </ul>
                    <p> Depois de fazer a atividade, marca-a como feita e verifica as atividades das outras pesssoas!</p>
                    <p> E para os mais dedicados, os com mais atividades são destacados no nosso <a href="#/classificacao"><strong>leaderboard</strong></a></p>
                </div>
                <div>
                    <img src="/imgs/varias_atividades.png"></img>
                </div>
            </div>
            {/* Mostrar percentagens para convencer da autenticidade da aplicação */}
            <div class="container-percentages-background">
                <p class="text-size-medium-Rantaro">Algumas estatísticas da nossa aplicação:</p>
                <div class="container-percentages">
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
            <p class="text-size-small-Rantaro"> Do que estás à espera? Começa a ser ativo hoje!!!</p>
            {/* Mostrar atividades diária de acordo com os gostos do utilizador */}
            <h1 class="text-size-medium-Rantaro">Atividades para Hoje (nºAtividades)</h1>
            <div class="container-activities">
                {/* Java Script para pegar as coisas da base de dados e criar os elementos no html*/}
                <div class='activity'>
                    <div>
                        <div>
                            <h1>Atividade 1</h1>
                            <p>Lorem Impsum dolor aset comma</p>
                        </div>
                        <div>
                            <div>
                                <div class="activity-icons">
                                    <img src='/imgs/people_white.png' alt='people'></img>
                                    <p>1</p>
                                </div>
                                <div class="activity-icons">
                                    <img src='/imgs/people_white.png' alt='people'></img>
                                    <p>~10min</p>
                                </div>
                                <div class="activity-icons">
                                    <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                    <p>Few to no challenges</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type='submit' class="button-comic">Concluir Atividade</button>
                        </div>
                    </div>
                </div>
                <div class='activityM'>
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
                                <button type='submit' class="button-comic">Concluir Atividade</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mostrar atividades recomendadas a todos utilizadores */}
            <p class="text-size-small-Rantaro">Não gostou das suas atividades? Nós também temos:</p>
            <h1 class="text-size-medium-Rantaro">Atividades Recomendadas</h1>
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
                                <button type='submit' class="button-comic">Concluir Atividade</button>
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
                                <button type='submit' class="button-comic">Concluir Atividade</button>
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
                                <button type='submit' class="button-comic">Concluir Atividade</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mostrar atividades recomendadas a todos utilizadores */}
            <p class="text-size-small-Rantaro">Além das atividades anteriores, que tal exprimentar algo diferente:</p>
            <h1 class="text-size-medium-Rantaro">Outras Atividades</h1>
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
                                <button type='submit' class="button-comic">Concluir Atividade</button>
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
                                <button type='submit' class="button-comic">Concluir Atividade</button>
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
                                <button type='submit' class="button-comic">Concluir Atividade</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}