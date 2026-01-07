import api from "./client";

export const signIn = async (email, password) => {
  const response = await api.post("/users/sign-in", {
    email,
    password
  });
  return response.data;
};

export const signUp = async (email, password) => {
  const response = await api.post("/users/sign-up", {
    email,
    password
  });
  return response.data;
};
