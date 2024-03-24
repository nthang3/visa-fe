import axiosInstance from "@/lib/axios";

export async function login(data: any) {
  try {
    const response = await axiosInstance.post(`/movon/api/v1/auth/login`,data);
    return response;
  } catch (error) {
    console.error(error);
    return error
  }
}
export async function getCurrentUser() {
  try {
    const response = await axiosInstance.get(`/movon/api/v1/users/current-user`);
    return response;
  } catch (error) {
    console.error(error);
    return error
  }
}

