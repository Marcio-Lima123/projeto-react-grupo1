import "../styles/EstatisticasPage.css";
export function EstatisticasPage() {
  return (
    <div className="conten_container">
      <div className="est_header">
        <h2>Estatísticas</h2>
        <div className="est_info">
          <p><strong>Total de Atividades Realizadas</strong></p>
          <p className="est_number">----</p>
        </div>
        <h3 className="est_subtitle">Atividades Realizadas</h3>
      </div>
      {/* ex atividade buscar as concluidas a base dados */}
      <div className="atividad_grid">

        {/* estrutura = homepage */}
        <div className="atividad_container">
          <div className="at_c">
            <div className="at_name">
              <p> correr teste</p>
            </div>

            <div className="etc_container">
              <div className="etc_f_container">
                <div className="gc_container">
                  <img src="/imgs/people_white.png" alt="people"/>
                  <p>1</p>
                </div>

                <div className="gc_container">
                  <img src="/imgs/difficulties_white.png" alt="hard_person"/>
                  <p>Few to no challenges</p>
                </div>
              </div>
              <div className="date_container">
                <p className="data_atividade">Concluída em: __/__/____</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
