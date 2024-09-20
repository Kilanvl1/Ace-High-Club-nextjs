import apiClient from "./api";
// CREATE
export async function createUser(userData: {
  email: string;
  username: string;
  password: string;
}) {
  return apiClient<any, any>("users/", "POST", userData);
}

/* // READ
export async function getProfile(id: number): Promise<Profile> {
  return apiClient<Profile>(`profiles/${id}/`, "GET");
}

// UPDATE
export async function updateProfile(
  id: number,
  userData: Partial<Profile>
): Promise<Profile> {
  return apiClient<Profile, Partial<Profile>>(
    `profiles/${id}/`,
    "PATCH",
    userData
  );
}
 */
/* // DELETE
async function deleteUser(id: number): Promise<void> {
  return apiClient<void>(`/api/users/${id}/`, "DELETE");
} */
