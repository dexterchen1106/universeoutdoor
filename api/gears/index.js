import { useApiFetch } from "../index";

// 搜尋裝備清單
export const useSearchGears = (payload) =>
  useApiFetch("/api/searchGears", payload);

// 進入單個裝備裝備頁面
export const useQueryGear = (id) => useApiFetch(`/api/queryGear/${id}`);
