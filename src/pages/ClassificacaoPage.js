import '../styles/ClassificacaoPage.css';
import { useEffect, useState } from "react";
import api, { setAuthToken } from "../api/client";


export function ClassificacaoPage() {

  const [ranking, setRanking] = useState([
  { uid: "", total: 0 },
  { uid: "", total: 0 },
  { uid: "", total: 0 }
]);

  useEffect(() => {
    async function loadRanking() {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser?.token) {
          console.error("Sem token de autenticação");
          return;
        }
        setAuthToken(storedUser.token);
        
        const res = await api.get("/users/activity-statistics");

        console.log("Payload ranking recebido:", res.data);

        // converter objeto { UID: total } → array
        const rankingArray = Object.entries(res.data).map(
          ([uid, total]) => ({
            uid,
            total
          })
        );

        // ordenar do maior para o menor
        rankingArray.sort((a, b) => b.total - a.total);

        setRanking(rankingArray);

      } catch (err) {
        console.error(
          "Erro ao carregar ranking:",
          err.response?.data || err
        );
      }
    }

    loadRanking();
  }, []);

if (ranking.length < 3) {
  return <p>A carregar classificação...</p>;
}

const podium = ranking.slice(0, 3);


return (
    <div className="classs_conteiner">
      <div className="clas_podio">
        <div className="podio_2">
          <img className="trofeu" src="/imgs/2º.png" alt="silver" />
          <h4>2º Lugar</h4>
          <p className="nome">{podium[1].uid}</p>
          <p className="total">Total Atividades</p>
          <p>{podium[1].total}</p>
        </div>

        <div className="podio_1">
          <img className="trofeu" src="/imgs/1º.png" alt="gold" />
          <h3>1º Lugar</h3>
          <p className="nome">{podium[0].uid}</p>
          <p className="total">Total Atividades</p>
          <p>{podium[0].total}</p>
        </div>

        <div className="podio_3">
          <img className="trofeu" src="/imgs/3º.png" alt="bronze" />
          <h5>3º Lugar</h5>
          <p className="nome">{podium[2].uid}</p>
          <p className="total">Total Atividades</p>
          <p>{podium[2].total}</p>
        </div>
      </div>

      <div className="class_atv">
        <h6><strong>Utilizadores mais ativos</strong></h6>
        <div className="titulos">
          <p>Utilizador</p>
          <p>Data de Registado</p>
          <p>Total de Atividades</p>
        </div>
        {/* EXEMPLO LINHAS */}
        <div className="linha">
          <div className="user_linha">
            <img src="/imgs/user.png" alt="user" />
            <p>{podium[0].uid}</p>
          </div>
          <p>07/05/2024</p>
          <p>{podium[0].total}</p>
        </div>

        <div className="linha">
          <div className="user_linha">
            <img src="/imgs/user.png" alt="user" />
            <p>{podium[1].uid}</p>
          </div>
          <p>07/05/2024</p>
          <p>{podium[1].total}</p>
        </div>
        <div className="linha">
          <div className="user_linha">
            <img src="/imgs/user.png" alt="user" />
            <p>{podium[2].uid}</p>
          </div>
          <p>07/05/2024</p>
          <p>{podium[2].total}</p>
        </div>
      </div>
    </div>
  );
}



