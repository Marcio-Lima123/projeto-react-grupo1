import '../styles/ClassificacaoPage.css';

export function ClassificacaoPage() {
  return (
    <div className="classs_conteiner">
      <div className="clas_podio">
        <div className="podio_2">
          <img className="trofeu" src="/imgs/2º.png" alt="silver" />
          <h4>2º Lugar</h4>
          <p className="nome">Nome utilizador</p>
          <p className="total">Total Atividades</p>
        </div>

        <div className="podio_1">
          <img className="trofeu" src="/imgs/1º.png" alt="gold" />
          <h3>1º Lugar</h3>
          <p className="nome">Nome utilizador</p>
          <p className="total">Total Atividades</p>
        </div>

        <div className="podio_3">
          <img className="trofeu" src="/imgs/3º.png" alt="bronze" />
          <h5>3º Lugar</h5>
          <p className="nome">Nome utilizador</p>
          <p className="total">Total Atividades</p>
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
            <p>Utilizador 123...</p>
          </div>
          <p>07/05/2024</p>
          <p>509</p>
        </div>

        <div className="linha">
          <div className="user_linha">
            <img src="/imgs/user.png" alt="user" />
            <p>Utilizador 123...</p>
          </div>
          <p>07/05/2024</p>
          <p>451</p>
        </div>
      </div>
    </div>
  );
}


