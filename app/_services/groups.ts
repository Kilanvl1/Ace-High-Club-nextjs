import { apiClient } from "./api";

const getGroups = async () => {
  const response = await apiClient<{}, {}>("/groups/", "GET");
  return response;
};

export { getGroups };
