import '../styles/preferences.css';
import { useState } from "react";

export function PreferencesPage() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(3);

function inMin() {
  if (min<max) setMin(min+1);}
function deMin() {
  if (min>1) setMin(min-1);}
function inMax() {
  if (max<3) setMax(max+1);}
function deMax() {
  if (max >min) setMax(max-1);}
  return (
    <div className="pref-page">
      <h2 className="pref-title">Preferências</h2>

      <div className="pref-section">
        <h4>Tipos de Atividades:</h4>

        <div className="pref-grid">
          <label><input type="checkbox" /> Educação</label>
          <label><input type="checkbox" /> Recreativo</label>
          <label><input type="checkbox" /> Social</label>
          <label><input type="checkbox" /> Caridade</label>
          <label><input type="checkbox" /> Cozinha</label>
          <label><input type="checkbox" /> Relaxamento</label>
          <label><input type="checkbox" /> Trabalho</label>
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

        <div className="pref-section">
            <h4>Nível de Dificuldade:</h4>

            <div className="pref-grid">
                <label><input type="checkbox"/> Fácil</label>
                <label><input type="checkbox"/> Médio</label>
                <label><input type="checkbox"/> Difícil</label>
            </div>
        </div>
        <button className="pref-save-btn">Salvar</button>
    </div>
  );
}

