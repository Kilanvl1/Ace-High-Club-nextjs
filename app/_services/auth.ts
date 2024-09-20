import Cookies from "js-cookie";
import apiClient from "./api";
/**
 * Stores a token in cookies.
 * @param {string} token - The token to be stored.
 * @param {"access" | "refresh"} type - The type of the token (access or refresh).
 */
const storeToken = (token: string, type: "access" | "refresh") => {
  Cookies.set(type + "Token", token);
};

/**
 * Retrieves a token from cookies.
 * @param {"access" | "refresh"} type - The type of the token to retrieve (access or refresh).
 * @returns {string | undefined} The token, if found.
 */
const getToken = (type: string) => {
  return Cookies.get(type + "Token");
};

/**
 * Removes both access and refresh tokens from cookies.
 */
const removeTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

// Verify credentials and return an access and refresh token
const login = (
  username: string,
  password: string
): Promise<{ access: string; refresh: string }> => {
  return apiClient<
    { username: string; password: string },
    { access: string; refresh: string }
  >("/token/", "POST", {
    username,
    password,
  });
};

const logout = () => {
  const refreshToken = getToken("refresh");
  return apiClient("/auth/logout/", "POST", { refresh: refreshToken });
};

const handleJWTRefresh = () => {
  const refreshToken = getToken("refresh");
  return apiClient("/token/refresh/", "POST", { refresh: refreshToken });
};

export { storeToken, getToken, removeTokens, login, logout, handleJWTRefresh };
