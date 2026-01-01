import '../styles/preferences.css';
import { useEffect, useState } from "react";

export function PreferencesPage() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(3);
    const [daily, setDaily] = useState(1);
    //apis
    const [types, setTypes] = useState([]);
    const [capitals, setCapitals] = useState([]);
    const [location, setLocation] = useState("");

    useEffect(() => {
        async function loadCapitals() {
            try {
                 const res = await fetch("/api/weather/capitals");
                const data = await res.json();
                 setCapitals(data);
            } catch (err) {
                console.error("Erro ao carregar capitais", err);
            }
        }loadCapitals();}, []);
    function toggle(value, list, setList) {
        if (list.includes(value)) {setList(list.filter(v => v !== value));}
        else {setList([...list, value]);}}

    function savePreferences() {
        const preferences = {types, participants: { min, max }, daily,location};
        //guarda na localstorage
        localStorage.setItem("preferences", JSON.stringify(preferences));
        alert("Preferências guardadas com sucesso");}

function inMin() {
  if (min<max) setMin(min+1);}
function deMin() {
  if (min>1) setMin(min-1);}
function inMax() {
  if (max<3) setMax(max+1);}
function deMax() {
  if (max >min) setMax(max-1);}
// nº atv
    function inDaily() {
        if (daily < 10) setDaily(daily + 1);}
    function deDaily() {
        if (daily > 1) setDaily(daily - 1);}

  return (
      <div className="pref-page">
          <h2 className="pref-title">Preferências</h2>

          <div className="pref-section">
              <h4>Tipos de Atividades:</h4>

              <div className="pref-grid">
                  <label><input type="checkbox" onChange={() => toggle("education", types, setTypes)}/> Educação</label>
                  <label><input type="checkbox"
                                onChange={() => toggle("recreational", types, setTypes)}/> Recreativo</label>
                  <label><input type="checkbox" onChange={() => toggle("social", types, setTypes)}/> Social</label>
                  <label><input type="checkbox" onChange={() => toggle("charity", types, setTypes)}/> Caridade</label>
                  <label><input type="checkbox" onChange={() => toggle("cooking", types, setTypes)}/> Cozinha</label>
                  <label><input type="checkbox"
                                onChange={() => toggle("relaxation", types, setTypes)}/> Relaxamento</label>
                  <label><input type="checkbox" onChange={() => toggle("work", types, setTypes)}/> Trabalho</label>
              </div>
          </div>

          <div className="pref-section">
              <h4>Número de Participantes:</h4>
              <div className="pref-number">
                  <p>Mínimo:</p>
                  <button onClick={deMin}>-</button>
                  <div className="num-box">{min}</div>
                  <button onClick={inMin}>+</button>

                  <p>Máximo:</p>
                  <button onClick={deMax}>-</button>
                  <div className="num-box">{max}</div>
                  <button onClick={inMax}>+</button>
              </div>
          </div>

          {/* LOCALIZAÇÃO da api weatherr */}
          <div className="pref-section">
              <h4>Localização:</h4>

              <select className="pref-select" value={location} onChange={e => setLocation(e.target.value)}>
                  <option value="">Selecionar cidade</option>

                  {Object.keys(capitals).map(region => (
                      <optgroup key={region} label={region}>
                          {Object.entries(capitals[region]).map(([code, name]) => (
                              <option key={code} value={name}>{name}</option>))}
                      </optgroup>
                  ))}
              </select>
          </div>

          <div className="pref-section">
              <h4>Nível de Dificuldade:</h4>

              <div className="pref-grid">
                  <label><input type="checkbox"/> Fácil</label>
                  <label><input type="checkbox"/> Médio</label>
                  <label><input type="checkbox"/> Difícil</label>
              </div>
          </div>
          <div className="pref-section">
              <h4>Quantas atividades pretende receber por dia?</h4>
              <div className="pref-number">
                  <p>Quantidade:</p>
                  <button onClick={deDaily}>-</button>
                  <div className="num-box">{daily}</div>
                  <button onClick={inDaily}>+</button>
              </div>
          </div>
          <button className="pref-save-btn" onClick={savePreferences}>Salvar</button>
      </div>
  );
}

