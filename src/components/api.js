//api atividades
const API_URL = "/api/activities";

export async function fetchActivities() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Erro ao buscar atividades: ${response.status}`);
    }

    const data = await response.json();
    console.log("API retornou:", data);
    return data.activities;
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
}
