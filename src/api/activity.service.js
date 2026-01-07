import api from "./client";

export const getActivities = async (uid) => {
  const response = await api.get(`/users/${uid}/activities`);
  return response.data;
};
