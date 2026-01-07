import { useState, useEffect } from "react";
import "../styles/EstatisticasPage.css";
export function EstatisticasPage() {

  //dados do utilizador a mais tarde vir do login
  const [user, setUser] = useState({
    email: "loading...",
    nome: "username",
    foto: null,
    localizacao: "loading...",
  });

  const [userAct, setUserAct] = useState([]);

  // Quando houver login
  // useEffect(() => {

  //   const saveUser = localStorage.getItem("user");

  //   async function loadAtividades(id) {
  //     try {
  //       const response = await fetch(`/users/${id}/activity-statistics`);

  //       if (!response.ok) {
  //         throw new Error("Erro ao buscar atividades");
  //       }

  //       const atividades = await response.json();
  //       setUserAct(atividades);

  //       console.log("Atividades:", atividades);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   if (saveUser) {
  //     setUser(JSON.parse(saveUser));
  //   }

  //   if(user?.uid){
  //     loadAtividades(user.uid);
  //   }
  // }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (!user.uid) return;

    async function loadAtividades(uid) {
      try {
        const response = await fetch(`/api/users/${uid}/activity-statistics`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          // Authorization: `${token}`
        }
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar atividades");
        }
        const atividadesObj = await response.json();
        console.log("API RAW:", atividadesObj);

        // transforma objeto em array
        const atividadesArray = Object.entries(atividadesObj).map(([key, value]) => ({
          key,
          lastTime: value.lastTime,
          times: value.times,
          activity: value.activity || "Sem nome",          
          accessibility: value.accessibility || "Desconhecida"
        }));

        console.log("atividadesArray",atividadesArray)

        setUserAct(atividadesArray);
      } catch (error) {
        console.error(error);
      }
    }

    loadAtividades(user.uid);
  }, [user.uid]);

  console.log(userAct)
  console.log(userAct.length)

  function ActivityCard({ atividade }) {
    return (
      <div className="atividad_containera">
        <div className="atividad_container">
          <div className="at_c">
            <div className="at_name">
              <p>{atividade.activity}</p>
            </div>

            <div className="etc_container">
              <div className="etc_f_container">
                <div className="gc_container">
                  <img src="/imgs/difficulties_white.png" alt="difficulty" />
                  <p>{atividade.accessibility}</p>
                </div>
              </div>
            </div>

            <div className="date_container">
              <p className="data_atividade">Concluída em: {atividade.lastTime}</p>
              <p className="data_atividade">Realizadas: {atividade.times}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="conten_container">
      <div className="est_header">
        <h2>Estatísticas</h2>
        <div className="est_info">
          <p><strong>Total de Atividades Realizadas</strong></p>
          <p className="est_number">{userAct.length}</p>
        </div>
        <h3 className="est_subtitle">Atividades Realizadas</h3>
      </div>
      {/* ex atividade buscar as concluidas a base dados */}

      <div className="atividad_grid">
        {userAct.map(a => (
          <ActivityCard key={a.key} atividade={a} />
        ))}
      </div>
    </div>
  );
}
