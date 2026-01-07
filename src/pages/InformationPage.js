import '../styles/information.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../api/client";


export function InformationPage() {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        email: "",
        displayName: "",
        photoUrl: null
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function loadProfile() {
        //  Carrega localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setProfile({
                email: user.email || "",
                displayName: user.nome || "",
                photoUrl: user.foto || null
            });
        }

        // Busca dados atualizados na API tenta so,, nao busca
        try {
            const response = await api.get("/users/profile");
            const data = response.data;

            setProfile({
                email: data.email || "",
                displayName: data.displayName || "",
                photoUrl: data.photoUrl || null
            });
        } catch (error) {
            console.error("Erro ao carregar perfil:", error);
        } finally {
            setLoading(false);
        }
    }
    loadProfile();
}, []);

    if (loading) {
        return <div className="info_">A carregar...</div>;
    }

    return (
        <div className="info_">
            <section className="info_c">
                <h1>Informações</h1>

                <div className="info_p">
                    <h3>Email</h3>
                    <p>{profile.email}</p>
                </div>

                <div className="info_p">
                    <h3>Nome</h3>
                    <p>{profile.displayName}</p>
                </div>

                <div className="info_p">
                    <h3>Imagem de Perfil</h3>
                    <div className="profile_pic">
                        {profile.photoUrl && (<img src={profile.photoUrl} alt="perfil" />)}
                    </div>
                </div>

                <button
                    className="edit_btn"
                    onClick={() => navigate("/informacao/editar")}>Editar Perfil</button>
            </section>
        </div>
    );
}

/*EDITAR PERFIL */
export function InformationEditPage() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        displayName: "",
        photoUrl: ""
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProfile() {
            try {
                const response = await api.get("/users/profile");
                const data = response.data;

                setForm({
                    email: data.email || "",
                    displayName: data.displayName || "",
                    photoUrl: data.photoUrl || ""
                });
            } catch (error) {
                console.error("Erro ao carregar perfil:", error);
            } finally {
                setLoading(false);
            }
        }
        loadProfile();
    }, []);

    async function SaveInfo() {
        try {
            await api.post("/users/profile", {
                displayName: form.displayName,
                photoUrl: form.photoUrl
            });

            navigate("/informacao");
        } catch (error) {
            console.error("Erro atualizar perfil:", error);
        }
    }

    if (loading) {
        return <div className="info_edit_">A carregar...</div>;
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
                        value={form.email} disabled/>
                </div>

                <div className="edit_p">
                    <h3>Nome</h3>
                    <input
                        type="text"
                        className="edit_input"
                        value={form.displayName}
                        onChange={(e) => setForm({ ...form, displayName: e.target.value })}
                    />
                </div>

                <div className="edit_p">
                    <h3>Imagem de Perfil</h3>
                    <input
                        type="text"
                        className="edit_input"
                        value={form.photoUrl}
                        onChange={(e) => setForm({ ...form, photoUrl: e.target.value })}/>
                </div>

                <button className="save_btn" onClick={SaveInfo}>Salvar</button>
            </section>
        </div>
    );
}
