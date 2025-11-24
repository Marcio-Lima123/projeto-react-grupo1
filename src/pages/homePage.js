import '../styles/homepage.css'

export function Home() {
    return (
        <div class='content_container'>
            <div >
                <h1>Atividades para Hoje (js quantidade Atividades)</h1>
                <div>
                    {/* Java Script para pegar as coisas da base de dados e criar os elementos no html*/}
                    <div class='atividade_container'>
                        <div class='at_c'>
                            <div class='at_name'>
                                <p>Tedasdausbdiabsdadiyiausbdabsidbuabsidbaiduabsudasdxt</p>
                            </div>
                        </div>
                        <div class='at_c'>
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
                            <div class='btn_container'>
                                <button type='submit'>Concluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div >
                <h1>Atividades Recomendadas</h1>
                <div>

                </div>
            </div >
            <div >
                <h1>Outras Atividades</h1>
                <div>

                </div>
            </div >
        </div>
    );
}