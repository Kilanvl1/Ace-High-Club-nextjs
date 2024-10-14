import { getToken, storeToken, handleJWTRefresh } from "./auth";

type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiError extends Error {
  status?: number;
  statusText?: string;
  data?: any;
}

export async function apiClient<TRequest, TResponse>(
  url: string,
  method: ApiMethod,
  data?: TRequest
) {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const accessToken = getToken("access");
    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
      {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const error: ApiError = new Error("API request failed");
      error.status = response.status;
      error.statusText = response.statusText;

      try {
        error.data = await response.json();
      } catch {
        error.data = await response.text();
      }

      const refresh = getToken("refresh");

      if (response.status === 401 && refresh && url !== "/token/") {
        // Token might have expired, attempt to refresh
        console.log("Refreshing token");

        try {
          const { access } = await handleJWTRefresh({ refresh });
          storeToken(access, "access");
          // Retry the original request with the new token
          return apiClient<TRequest, TResponse>(url, method, data);
        } catch (refreshError) {
          // If refresh fails, throw the original error
          throw error;
        }
      }

      throw error;
    }

    return response.json() as Promise<TResponse>;
  } catch (error) {
    throw error;
  }
}

export default apiClient;
