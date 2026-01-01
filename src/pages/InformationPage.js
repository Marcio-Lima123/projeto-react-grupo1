import '../styles/information.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
export function InformationPage() {
    const navigate = useNavigate();

    //dados do utilizador a mais tarde vir do login
    const [user,setUser] = useState({
        email: "loading...",
        nome: "loading...",
        foto: null,
        localizacao: "loading...",
    });
    const [prefs, setPrefs] = useState(null);
    // Quando houver login
    useEffect(() => {
        const saveUser = localStorage.getItem("user");
        const savePrefs = localStorage.getItem("preferences");

        if (saveUser) setUser(JSON.parse(saveUser));
        if (savePrefs) setPrefs(JSON.parse(savePrefs));}, []);
    return (
        <div className="info_">
            {/* informacao*/}
            <section className="info_c">
                <h1>Informações</h1>

                <div className="info_p">
                    <h3>Email</h3>
                    <p>{user.email}</p>
                </div>

                <div className="info_p">
                    <h3>Nome</h3>
                    <p>{user.nome}</p>
                </div>

                <div className="info_p">
                    <h3>Imagem de Perfil</h3>
                    <div className="profile_pic">
                        <img src={user.foto} alt="perfil"/>
                    </div>
                </div>
                {prefs && (
                    <div className="info_p">
                        <h3>Preferências</h3>
                        <p>Tipos: {prefs.types.join(", ")}</p>
                        <p>Atividades por dia: {prefs.daily}</p>
                        <p>Localização: {prefs.location}</p>
                    </div>)}

                <button className="edit_btn" onClick={() => navigate("/informacao/editar")}>Editar Perfil</button>
            </section>
        </div>
    );
}

export function InformationEditPage() {

    const [form, setForm] = useState({
        email:"",
        nome: "",
        imagem: "",
        localizacao: ""
    });

    function SaveInfo() {
        console.log("Novos dados enviados:", form);
    }
    return (
        <div className="info_edit_">

            <section className="info_edit_c">
                <h1>Atualizar Informações</h1>

                <div className="edit_p">
                    <h3>Email</h3>
                    <input
                        type="email"
                        className="edit_input"
                        placeholder="Novo email"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                </div>

                <div className="edit_p">
                    <h3>Nome</h3>
                    <input
                        type="text"
                        className="edit_input"
                        placeholder="Novo nome de utilizador"
                        value={form.nome}
                        onChange={(e) => setForm({...form, nome: e.target.value})}
                    />
                </div>

                <div className="edit_p">
                    <h3>Localização</h3>
                    <input
                        type="text"
                        className="edit_input"
                        placeholder="Distrito ou Ilha"
                        value={form.localizacao}
                        onChange={(e) => setForm({...form, localizacao: e.target.value})}
                    />
                </div>

                <div className="edit_p">
                    <h3>Imagem de Perfil</h3>
                    <input
                        type="text"
                        className="edit_input"
                        placeholder="URL da nova imagem"
                        value={form.imagem}
                        onChange={(e) => setForm({...form, imagem: e.target.value})}
                    />
                </div>

                <button className="save_btn" onClick={SaveInfo}>
                    Salvar
                </button>
            </section>
        </div>
    );
}