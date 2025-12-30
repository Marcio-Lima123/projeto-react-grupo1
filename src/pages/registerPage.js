import '../styles/login.css'
import { useState } from "react";
import { signUp } from "../components/usersApi";

export function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const res = await signUp(email, password);
      console.log("Utilizador criado:", res);
      alert("Conta criada com sucesso!");
      window.location.href = "#/preferencias";
    } catch (err) {
      alert("Erro ao registar utilizador");
    }
  }

  return (
    <div className="bg_container">
      <div className="ap_name">
        <img src="imgs/Logo.png" alt="Dailio_Logo" />
        <h1>Dailio</h1>
      </div>

      <div className="form_container">
        <h2>Registar</h2>

        <form className="log_container" onSubmit={handleRegister}>
          <div className="ep_container">
            <label>Email</label>
            <input
              className="ipt_ep"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="ep_container">
            <label>Password</label>
            <input
              className="ipt_ep"
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="btn_logIn ep_container">
            <input className="btn_enter" type="submit" value="Registar" />

            <div className="reg_container">
              <label>Já tem conta?</label>
              <a className="btn_enter" href="#/login">Fazer Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
