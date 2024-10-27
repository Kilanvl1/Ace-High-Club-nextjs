import { apiClient } from "./api";
import { Group } from "@/types/schema";
import { revalidatePath } from "next/cache";
const getGroups = async (): Promise<Group[]> => {
  return await apiClient<void, Group[]>("groups/", "GET");
};

const createGroup = async ({
  name,
  group_photo,
}: {
  name: string;
  group_photo?: File | null;
}): Promise<Group> => {
  const groupFormData = new FormData();

  groupFormData.append("name", name);
  if (group_photo) {
    groupFormData.append("group_photo", group_photo);
  }

  return await apiClient<FormData, Group>("groups/", "POST", groupFormData, {});
};

const deleteGroup = async (groupId: number): Promise<void> => {
  await apiClient<void, void>(`groups/${groupId}/`, "DELETE");
};

export { getGroups, createGroup, deleteGroup };
