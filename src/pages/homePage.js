import '../styles/homepage.css';
import { useEffect, useState } from "react";
import { fetchActivities } from "../components/api";

export function Home() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function loadActivities() {
      const data = await fetchActivities();
      console.log("DADOS DA API:", data);
      setActivities(data);
    }
    loadActivities();
  }, []);

  // Filtros das atividades meti limite a aparecer
const dailyActivities = activities.filter(a => a.type === "relaxation").slice(0, 8);

const recommendedActivities = activities.filter(a => a.type === "social").slice(0, 8);

const otherActivities = activities.filter(a => a.type === "education").slice(0, 7);

  return (
    <div className="content_container">

      {/* Imagem Hero */}
      <div className="image-hero">
        <div className="text-hero">
          <h1 className="text-size-big-Rantaro">Dailio</h1>
          <h1 className="text-size-small-Rantaro">
            a tua dose diária de entretenimento!!!
          </h1>
          <p className="text-size-small">
            A Dailio é uma aplicação que disponibiliza atividades diárias de todos
            os tipos, para que possa experienciar as diversas coisas que existem
            no mundo.
          </p>
          <a href="#/">
            <button className="button-comic">Ver as novas atividades!</button>
          </a>
        </div>
      </div>

      {/* Lista de atividades */}
      <div className="container-activity-bullet_list">
        <div>
          <p>
            Nós disponibilizamos <strong>+200 atividades </strong> para todos os
            gostos, tais como:
          </p>
          <ul>
            <li>Cozinhar, Desenhar, Praticar desportos, Escrever, ...</li>
            <li>Visitar/Explorar locais e culturas</li>
            <li>Aprender novos instrumentos/hobbies</li>
            <li>Socializar com amigos, grupos, desconhecidos</li>
            <li>Atividades produtivas, de lazer e novas experiências</li>
            <li>E muito mais</li>
          </ul>
          <p>
            Depois de fazer a atividade, marca-a como feita e verifica as
            atividades das outras pessoas!
          </p>
          <p>
            E para os mais dedicados, os com mais atividades são destacados no
            nosso <a href="/classificacao"><strong>leaderboard</strong></a>
          </p>
        </div>
        <div>
          <img src="/imgs/varias_atividades.png" alt="imagens" />
        </div>
      </div>

      {/* Estatísticas */}
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

      <p className="text-size-small-Rantaro">Do que estás à espera? Começa a ser ativo hoje!!!</p>

      {/* Atividades do dia */}
      <h1 className="text-size-medium-Rantaro">Atividades para Hoje</h1>
      <div className="container-activities">
        {dailyActivities.map(atividade => (
          <div className="activity" key={atividade.key}>
            <div className="at_c">
              <div className="at_name"><p>{atividade.activity}</p></div>
              <div className="etc_container">
                <div className="etc_f_container">
                  <div className="gc_container">
                    <img src="/imgs/people_white.png" alt="people" />
                    <p>{atividade.participants}</p>
                  </div>
                  <div className="gc_container">
                    <img src="/imgs/difficulties_white.png" alt="difficulty" />
                    <p>{atividade.accessibility}</p>
                  </div>
                </div>
              </div>
              <div className="btn_container">
                <button className="button-comic">Marcar como Feita</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Atividades recomendadas */}
      <p className="text-size-small-Rantaro">Não gostou das suas atividades? Nós também temos:</p>
      <h1 className="text-size-medium-Rantaro">Atividades Recomendadas</h1>
      <div className="container-activities">
        {recommendedActivities.map(atividade => (
          <div className="activity" key={atividade.key}>
            <div className="at_c">
              <div className="at_name"><p>{atividade.activity}</p></div>
              <div className="etc_container">
                <div className="etc_f_container">
                  <div className="gc_container">
                    <img src="/imgs/people_white.png" alt="people" />
                    <p>{atividade.participants}</p>
                  </div>
                  <div className="gc_container">
                    <img src="/imgs/difficulties_white.png" alt="difficulty" />
                    <p>{atividade.accessibility}</p>
                  </div>
                </div>
              </div>
              <div className="btn_container">
                <button className="button-comic">Marcar como Feita</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Outras atividades */}
      <p className="text-size-small-Rantaro">Além das atividades anteriores, que tal experimentar algo diferente:</p>
      <h1 className="text-size-medium-Rantaro">Outras Atividades</h1>
      <div className="container-activities">
        {otherActivities.map(atividade => (
          <div className="activity" key={atividade.key}>
            <div className="at_c">
              <div className="at_name"><p>{atividade.activity}</p></div>
              <div className="etc_container">
                <div className="etc_f_container">
                  <div className="gc_container">
                    <img src="/imgs/people_white.png" alt="people" />
                    <p>{atividade.participants}</p>
                  </div>
                  <div className="gc_container">
                    <img src="/imgs/difficulties_white.png" alt="difficulty" />
                    <p>{atividade.accessibility}</p>
                  </div>
                </div>
              </div>
              <div className="btn_container">
                <button className="button-comic">Marcar como Feita</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
