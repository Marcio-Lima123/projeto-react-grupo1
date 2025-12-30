import '../styles/login.css'
import { useState } from "react";
import { signIn } from "../components/usersApi";
import { useNavigate } from "react-router-dom";
export function LoginPage() {

    // const handleSubmit = async (e) => {
    //     try {
    //         none
    //     }
    // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await signIn(email, password);

      const user = {
        email: res.email,
        nome: res.displayName || res.email.split("@")[0],
        localizacao: "Não definida",
        foto: res.photoUrl || null,
        token: res.idToken
      };

      // guarda utilizador tudo daods
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login efetuado com sucesso!");
      navigate("/"); // ir página inicial

    } catch (err) {
      alert("Email ou password incorretos");
    }
  }


  return (
    <div className="bg_container">
      <div className="ap_name">
        <img src="imgs/Logo.png" alt="Dailio_Logo" />
        <h1>Dailio</h1>
      </div>

      <div className="form_container">
        <h2>Login</h2>

        <form className="log_container" onSubmit={handleSubmit}>
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
            <input className="btn_enter" type="submit" value="Entrar" />

            <div className="reg_container">
              <label>Não tem conta?</label>
              <a className="btn_enter" href="#/register">Registar</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
