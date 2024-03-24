import axiosInstance from "@/lib/axios";
import { location } from './location';
const objLocation: any = location;
export async function getReports(page :number, config?: any) {
  try {
    const response = await axiosInstance.get("/movon/api/v1/trips", {
      params: {
        take: 6,
        page: page,
        orderBy: "startTime",
      }
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getReportById(id: number, params?: any) {
  try {
    const response = await axiosInstance.get(`/movon/api/v1/trips/${id}`,{
      params: {
        ...params.params,
        order: "ASC",
        orderBy: "createdAt",
      }
    });
    const item = response.data.data;
    return item;
  } catch (error) {
    console.error(error);
  }
}