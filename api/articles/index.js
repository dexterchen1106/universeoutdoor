import { useApiFetch } from "../index";
export const useSearchArticles = (payload) =>
  useApiFetch("/api/articles", payload);
