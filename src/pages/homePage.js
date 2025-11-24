import '../styles/homepage.css'

export function Home() {
    return (
        <div class='content_container'>
            <div >
                <h1 class="titulos-grandes">Atividades para Hoje (nºAtividades)</h1> 
                <div>
                    {/* Java Script para pegar as coisas da base de dados e criar os elementos no html*/}
                    <div class='atividade_container'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Tedasdausbdiabsdadiyiausbdabsidbuabsidbaiduabsudasdxt</p>
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
                <p>Não gostou das suas atividades? nós também Recomendamos:</p>
                <h1 class="titulos-grandes">Atividades Recomendadas</h1>
                <div>

                </div>
            </div >
            <div >
                <p>Além das atividades anteriores, que tal exprimentar algo diferente:</p>
                <h1 class="titulos-grandes">Outras Atividades</h1>
                <div>

                </div>
            </div >
        </div>
    );
}