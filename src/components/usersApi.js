
export async function signUp(email, password) {
  try {
    const response = await fetch(`/api/users/sign-up`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password, returnSecureToken: true})
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Erro no signup");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro signup:", error);
    throw error;
  }
}
//login
export async function signIn(email, password) {
  const response = await fetch("/api/users/sign-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  });

  if (!response.ok) {
    throw new Error("Credenciais inválidas");
  }

  return await response.json();
}
