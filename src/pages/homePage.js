import "../styles/homepage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchActivities } from "../components/api";

export function Home() {
  // criar a variável que permite mudar o utilizador de página
  const navigate = useNavigate();

  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [completedActivities, setCompletedActivities] = useState(() => {
    const stored = localStorage.getItem("completedActivities");
    return stored ? JSON.parse(stored) : [];
  });

  async function openDetails(key, section) {
    if (!key) return;

    try {
      setLoadingDetails(true);
      setSelectedSection(section);

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
    const prefsSaved = localStorage.getItem("preferencesSaved");
    const savedUser = localStorage.getItem("user");

    // Se não estiver autenticado, manda o utilizador para a página de login
    if (!savedUser) {
      navigate("/login");
      return;
    }

    // Se ainda não guardou preferências, manda o utilizador para a página de preferências
    if (prefsSaved !== "true") {
      navigate("/preferencias");
      return;
    }


    // Se tudo anteriormente deu certo, mostra as atividades
    async function loadActivities() {
      const data = await fetchActivities();
      setActivities(data);
    }

    loadActivities();
  }, [navigate]);


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

  function DetailsBlock() {
    if (loadingDetails) {
      return (
        <p className="text-size-small-Rantaro">
          A carregar detalhes da atividade…
        </p>
      );
    }

    if (!selectedActivity) return null;

    return (
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
          onClick={() => {
            setSelectedActivity(null);
            setSelectedSection(null);
          }}
        >
          Fechar detalhes
        </button>
      </div>
    );
  }

  function toggleCompleted(key) {
    setCompletedActivities(prev => {
      let updated;

      if (prev.includes(key)) {
        updated = prev.filter(k => k !== key);
      } else {
        updated = [...prev, key];
      }

      localStorage.setItem(
        "completedActivities",
        JSON.stringify(updated)
      );

      return updated;
    });
  }



  function ActivityCard({ atividade, section }) {
    const isClickable = Boolean(atividade.key);
    const isCompleted = completedActivities.includes(atividade.key);


    return (
      <div
        className={`activity ${isClickable ? "clickable" : ""}`}
        onClick={() =>
          isClickable && openDetails(atividade.key, section)
        }
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
              className={`button-comic ${isCompleted ? "completed" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleCompleted(atividade.key);
              }}
            >
              {isCompleted ? "Feita!" : "Marcar como Feita"}
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
          <ActivityCard
            key={a.key || a.activity}
            atividade={a}
            section="daily"
          />
        ))}
      </div>

      {selectedSection === "daily" && (
        <DetailsBlock />
      )}


      {/* Texto intermédio */}
      <p className="text-size-small-Rantaro">
        Não gostou das suas atividades? Nós também temos:
      </p>

      {/* Atividades recomendadas */}
      <h1 className="text-size-medium-Rantaro">Atividades Recomendadas</h1>
      <div className="container-activities">
        {recommendedActivities.map(a => (
          <ActivityCard
            key={a.key || a.activity}
            atividade={a}
            section="recommended"
          />
        ))}
      </div>

      {selectedSection === "recommended" && (
        <DetailsBlock />
      )}


      {/* Texto intermédio */}
      <p className="text-size-small-Rantaro">
        Além das atividades anteriores, que tal experimentar algo diferente:
      </p>

      {/* Outras atividades */}
      <h1 className="text-size-medium-Rantaro">Outras Atividades</h1>
      <div className="container-activities">
        {otherActivities.map(a => (
          <ActivityCard
            key={a.key || a.activity}
            atividade={a}
            section="other"
          />
        ))}
      </div>

      {selectedSection === "other" && (
        <DetailsBlock />
      )}
    </div>
  );
}
