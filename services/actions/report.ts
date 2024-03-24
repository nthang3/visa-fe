import { getReports, getReportById } from "@/services/requests/report";

export async function actionGetReports(page: number) {
  return await getReports(page);
}
export async function actionGetReportById(id: number) {
  return await getReportById(id);
}