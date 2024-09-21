import Cookies from "js-cookie";
import apiClient from "./api";
import { LoginRequest, LoginResponse } from "@/types/auth";
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
  const token = Cookies.get(type + "Token");
  if (token === "undefined") {
    removeTokens();
    return undefined;
  }
  return token;
};

/**
 * Removes both access and refresh tokens from cookies.
 */
const removeTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

// Verify credentials and return an access and refresh token
const login = async ({
  username,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient<LoginRequest, LoginResponse>(
    "/token/",
    "POST",
    {
      username,
      password,
    }
  );
  storeToken(response.access, "access");
  storeToken(response.refresh, "refresh");
  return response;
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
