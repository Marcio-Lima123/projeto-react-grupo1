import '../styles/homepage.css'
import { useState } from "react";
// import express from 'express';





export function Home() {

    // const app = express();
    //
    // app.get("/api/activities", async (req, res) => {
    //     try {
    //         const response = await fetch(
    //             "https://anypoint.mulesoft.com/mocking/api/v1/links/8d568a0e-4718-430e-83b8-58dd1314121b/activities"
    //         );
    //         const data = await response.json();
    //         res.json(data);
    //     } catch (error) {
    //         res.status(500).json({ error: "Server error" });
    //     }
    // });
    //
    // useEffect(() => {
    //     fetch("/api/activities")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setActivities(data);
    //         });
    // }, []);
    //
    // app.listen(5000, () => console.log("Server running on port 5000"));


    const [acts] = useState([
        {
            "activity": "Learn Express.js",
            "type": "education",
            "participants": 1,
            "accessibility": "Few to no challenges",
            "link": "https://expressjs.com/",
            "key": "3943506",
            "recommendationSpec": {
                "clearSky": 0,
                "cloudy": 1,
                "fog": 2,
                "partlyCloudySky": 0,
                "rain": 2
            }
        },
        {
            "activity": "Learn to greet someone in a new language",
            "type": "education",
            "participants": 1,
            "accessibility": "Few to no challenges",
            "link": "",
            "key": "4704256",
            "recommendationSpec": {
                "clearSky": 0,
                "cloudy": 1,
                "fog": 2,
                "partlyCloudySky": 1,
                "rain": 2
            }
        },
        {
            "activity": "Learn how to play a new sport",
            "type": "recreational",
            "participants": 1,
            "accessibility": "Minor challenges",
            "link": "",
            "key": "5808228",
            "recommendationSpec": {
                "clearSky": 2,
                "cloudy": 1,
                "fog": 0,
                "partlyCloudySky": 2,
                "rain": 0
            }
        }
    ])


    // const [ativ, setAtiv] = useState();

    const atividades = require('../jsons/act.json')['activities'];
    console.log(atividades['activities'][1]);


    // for (let i = 0; i < atividades['activities'].lenght / 2; i++) {
    //     console.log(atividades['activities'][0])
    // }

    

    // setAtiv(atividades['activities'])


    const [state, setState] = useState('Concluir Atividade')
    const completeAct = () => {
        setState('Conluida')
    }

    return (
        <div className='content_container'>
            
            {/* Imagem com texto dentro da Homepage, designação de image-hero */}
            <div className="image-hero">
                <div className="text-hero">
                    <h1 className="text-size-big-Rantaro">Dailio</h1> <h1 className="text-size-small-Rantaro"> a tua dose diária de entretenimento!!!</h1>
                    <p className="text-size-small">A Dailio é uma aplicação que disponibiliza atividades diárias de todos os tipos, para que possa experienciar as diversas coisas que existem no mundo.</p>
                    <a href="#/"><button className="button-comic">Ver as novas atividades!</button></a>
                </div>
            </div>
            {/* Lista de bullet points para chamar a atenção do utilizador com os vários tipos de atividades existentes */}
            <div className="container-activity-bullet_list">
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
                    <p> E para os mais dedicados, os com mais atividades são destacados no nosso <a href="/classificacao"><strong>leaderboard</strong></a></p>
                </div>
                <div>
                    <img src="/imgs/varias_atividades.png" alt="imagens"></img>
                </div>
            </div>
            {/* Mostrar percentagens para convencer da autenticidade da aplicação */}
            <div className="container-percentages-background">
                <p className="text-size-medium-Rantaro">Algumas estatísticas da nossa aplicação:</p>
                <div className="container-percentages">
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
            <p className="text-size-small-Rantaro"> Do que estás à espera? Começa a ser ativo hoje!!!</p>
            {/* Mostrar atividades diária de acordo com os gostos do utilizador */}
            <h1 className="text-size-medium-Rantaro">Atividades para Hoje (nºAtividades)</h1>
            <div className="container-activities">
                {/* Java Script para pegar as coisas da base de dados e criar os elementos no html*/}
                {acts.map(atividade => (
                    <div className='activity'>
                        <div className='at_c'>
                            <div className='at_name'>
                                <p>{atividade.activity}</p>
                            </div>
                            <div className='etc_container'>
                                <div className='etc_f_container'>
                                    <div className='gc_container'>
                                        <img src='/imgs/people_white.png' alt='people.png' />
                                        <p>{atividade.participants}</p>
                                    </div>
                                    <div className='gc_container'>
                                        <img src='/imgs/difficulties_white.png' alt='hard_person' />
                                        <p>{atividade.accessibility}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn_container">
                                <button type='submit' className="button-comic" onClick={completeAct}>{state}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Mostrar atividades recomendadas a todos utilizadores */}
            <p className="text-size-small-Rantaro">Não gostou das suas atividades? Nós também temos:</p>
            <h1 className="text-size-medium-Rantaro">Atividades Recomendadas</h1>
            <div className="container-activities">
                <div className='activity'>
                    <div className='at_c'>
                        <div className='at_name'>
                            <p>Atividade 1 - Descrição da atvidade</p>
                        </div>
                        <div className='etc_container'>
                            <div className='etc_f_container'>
                                <div className='gc_container'>
                                    <img src='/imgs/people_white.png' alt='people'></img>
                                    <p>1</p>
                                </div>
                                <div className='gc_container'>
                                    <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                    <p>Few to no challenges</p>
                                </div>
                            </div>
                            <div className="btn_container">
                                <button type='submit' className="button-comic">Concluir Atvidade</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='activity'>
                    <div className='at_c'>
                        <div className='at_name'>
                            <p>Atividade 1 - Descrição da atvidade</p>
                        </div>
                        <div className='etc_container'>
                            <div className='etc_f_container'>
                                <div className='gc_container'>
                                    <img src='/imgs/people_white.png' alt='people'></img>
                                    <p>1</p>
                                </div>
                                <div className='gc_container'>
                                    <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                    <p>Few to no challenges</p>
                                </div>
                            </div>
                            <div className="btn_container">
                                <button type='submit' className="button-comic">Concluir Atividade</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='activity'>
                    <div className='at_c'>
                        <div className='at_name'>
                            <p>Atividade 1 - Descrição da atvidade</p>
                        </div>
                        <div className='etc_container'>
                            <div className='etc_f_container'>
                                <div className='gc_container'>
                                    <img src='/imgs/people_white.png' alt='people'></img>
                                    <p>1</p>
                                </div>
                                <div className='gc_container'>
                                    <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                    <p>Few to no challenges</p>
                                </div>
                            </div>
                            <div className="btn_container">
                                <button type='submit' className="button-comic">Concluir Atividade</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mostrar atividades recomendadas a todos utilizadores */}
            <p className="text-size-small-Rantaro">Além das atividades anteriores, que tal exprimentar algo diferente:</p>
            <h1 className="text-size-medium-Rantaro">Outras Atividades</h1>
            <div className="container-activities">
                <div className='activity'>
                    <div className='at_c'>
                        <div className='at_name'>
                            <p>Atividade 1 - Descrição da atvidade</p>
                        </div>
                        <div className='etc_container'>
                            <div className='etc_f_container'>
                                <div className='gc_container'>
                                    <img src='/imgs/people_white.png' alt='people'></img>
                                    <p>1</p>
                                </div>
                                <div className='gc_container'>
                                    <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                    <p>Few to no challenges</p>
                                </div>
                            </div>
                            <div className="btn_container">
                                <button type='submit' className="button-comic">Concluir Atividade</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='activity'>
                    <div className='at_c'>
                        <div className='at_name'>
                            <p>Atividade 1 - Descrição da atvidade</p>
                        </div>
                        <div className='etc_container'>
                            <div className='etc_f_container'>
                                <div className='gc_container'>
                                    <img src='/imgs/people_white.png' alt='people'></img>
                                    <p>1</p>
                                </div>
                                <div className='gc_container'>
                                    <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                    <p>Few to no challenges</p>
                                </div>
                            </div>
                            <div className="btn_container">
                                <button type='submit' className="button-comic">Concluir Atividade</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='activity'>
                    <div className='at_c'>
                        <div className='at_name'>
                            <p>Atividade 1 - Descrição da atvidade</p>
                        </div>
                        <div className='etc_container'>
                            <div className='etc_f_container'>
                                <div className='gc_container'>
                                    <img src='/imgs/people_white.png' alt='people'></img>
                                    <p>1</p>
                                </div>
                                <div className='gc_container'>
                                    <img src='/imgs/difficulties_white.png' alt='hard_person'></img>
                                    <p>Few to no challenges</p>
                                </div>
                            </div>
                            <div className="btn_container">
                                <button type='submit' className="button-comic">Concluir Atividade</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}