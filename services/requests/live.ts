import axiosInstance from "@/lib/axios";
import axios from "axios";
export async function getLiveVehicle(params?: any) {
  try {
    const response = await axiosInstance.get("/movon/api/v1/devices/vehicles", {
      params: {
        ...params.params,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getLiveStatisticHome() {
  try {
    const response = await axiosInstance.get("/movon/api/v1/statistics/home", {});
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getLiveEventByAction(event: string) {
  try {
    const response = await axiosInstance.get("/movon/api/v1/statistics/home", {params: {eventType: event}});
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}
