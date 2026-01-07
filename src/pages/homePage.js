import "../styles/homepage.css";
import { useEffect, useState } from "react";
import { fetchActivities } from "../components/api";

export function Home() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  async function openDetails(key) {
    if (!key) {
      console.warn("Atividade sem key válida — detalhes indisponíveis");
      return;
    }

    try {
      setLoadingDetails(true);

      const response = await fetch(`/api/activities/${key}`);
      if (!response.ok) {
        throw new Error("Erro ao obter detalhes da atividade");
      }

      const data = await response.json();
      setSelectedActivity(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingDetails(false);
    }
  }

  useEffect(() => {
    async function loadActivities() {
      const data = await fetchActivities();
      setActivities(data);
    }
    loadActivities();
  }, []);

  // Filtros
  const dailyActivities = activities
    .filter(a => a.type === "relaxation")
    .slice(0, 8);

  const recommendedActivities = activities
    .filter(a => a.type === "social")
    .slice(0, 8);

  const otherActivities = activities
    .filter(a => a.type === "education")
    .slice(0, 7);

  function ActivityCard({ atividade }) {
    const isClickable = Boolean(atividade.key);

    return (
      <div
        className={`activity ${isClickable ? "clickable" : ""}`}
        onClick={() => isClickable && openDetails(atividade.key)}
      >
        <div className="at_c">
          <div className="at_name">
            <p>{atividade.activity}</p>
          </div>

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
            <button
              className="button-comic"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Marcar como feita:", atividade.key);
              }}
            >
              Marcar como Feita
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            Nós disponibilizamos <strong>+100 atividades </strong> para todos os
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
        <p className="text-size-medium-Rantaro">
          Algumas estatísticas da nossa aplicação:
        </p>
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
            <p><strong>{activities.length} Atividades</strong></p>
          </div>
        </div>
      </div>

      <p className="text-size-small-Rantaro">
        Do que estás à espera? Começa a ser ativo hoje!!!
      </p>

      {/* Atividades do dia */}
      <h1 className="text-size-medium-Rantaro">Atividades para Hoje</h1>
      <div className="container-activities">
        {dailyActivities.map(a => (
          <ActivityCard key={a.key || a.activity} atividade={a} />
        ))}
      </div>

      {/* Texto intermédio */}
      <p className="text-size-small-Rantaro">
        Não gostou das suas atividades? Nós também temos:
      </p>

      {/* Atividades recomendadas */}
      <h1 className="text-size-medium-Rantaro">Atividades Recomendadas</h1>
      <div className="container-activities">
        {recommendedActivities.map(a => (
          <ActivityCard key={a.key || a.activity} atividade={a} />
        ))}
      </div>

      {/* Texto intermédio */}
      <p className="text-size-small-Rantaro">
        Além das atividades anteriores, que tal experimentar algo diferente:
      </p>

      {/* Outras atividades */}
      <h1 className="text-size-medium-Rantaro">Outras Atividades</h1>
      <div className="container-activities">
        {otherActivities.map(a => (
          <ActivityCard key={a.key || a.activity} atividade={a} />
        ))}
      </div>

      {/* Detalhes */}
      {loadingDetails && (
        <p className="text-size-small-Rantaro">
          A carregar detalhes da atividade…
        </p>
      )}

      {selectedActivity && !loadingDetails && (
        <div className="activity-details">
          <h2 className="text-size-medium-Rantaro">
            {selectedActivity.activity}
          </h2>

          <p><strong>Tipo:</strong> {selectedActivity.type}</p>
          <p><strong>Participantes:</strong> {selectedActivity.participants}</p>
          <p><strong>Dificuldade:</strong> {selectedActivity.accessibility}</p>

          {selectedActivity.description && (
            <p><strong>Descrição:</strong> {selectedActivity.description}</p>
          )}

          <button
            className="button-comic"
            onClick={() => setSelectedActivity(null)}
          >
            Fechar detalhes
          </button>
        </div>
      )}
    </div>
  );
}
