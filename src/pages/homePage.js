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

  // Filtros por tipo
  const dailyActivities = activities
    .filter(a => a.type === "relaxation")
    .slice(0, 8);

  const recommendedActivities = activities
    .filter(a => a.type === "social")
    .slice(0, 8);

  const otherActivities = activities
    .filter(a => a.type === "education")
    .slice(0, 7);

  // Card reutilizável
  function ActivityCard({ atividade }) {
    const isClickable = Boolean(atividade.key);

    return (
      <div
        className={`activity ${isClickable ? "clickable" : ""}`}
        key={atividade.key || atividade.activity}
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
      {/* HERO */}
      <div className="image-hero">
        <div className="text-hero">
          <h1 className="text-size-big-Rantaro">Dailio</h1>
          <h1 className="text-size-small-Rantaro">
            a tua dose diária de entretenimento!!!
          </h1>
        </div>
      </div>

      {/* ATIVIDADES DO DIA */}
      <h1 className="text-size-medium-Rantaro">Atividades para Hoje</h1>
      <div className="container-activities">
        {dailyActivities.map(a => (
          <ActivityCard key={a.key || a.activity} atividade={a} />
        ))}
      </div>

      {/* RECOMENDADAS */}
      <h1 className="text-size-medium-Rantaro">Atividades Recomendadas</h1>
      <div className="container-activities">
        {recommendedActivities.map(a => (
          <ActivityCard key={a.key || a.activity} atividade={a} />
        ))}
      </div>

      {/* OUTRAS */}
      <h1 className="text-size-medium-Rantaro">Outras Atividades</h1>
      <div className="container-activities">
        {otherActivities.map(a => (
          <ActivityCard key={a.key || a.activity} atividade={a} />
        ))}
      </div>

      {/* DETALHES */}
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

