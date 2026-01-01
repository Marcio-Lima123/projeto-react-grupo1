export async function getCapitals() {
  const response = await fetch("/api/weather/capitals");

  if (!response.ok) {
    throw new Error("Erro ao obter capitais");
  }

  return response.json();
}
