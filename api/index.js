export const useApiFetch = (url, payload = {}) => {
  const token = useCookie("token"); // 從 cookie 取得登入 token
  console.log(url);
  return useFetch(url, {
    baseURL: "/api",
    method: payload.method || "GET",
    query: payload.query,
    body: payload.body,
    headers: {
      ...payload.headers,
      Authorization: token.value ? `Bearer ${token.value}` : undefined,
    },
    onRequest({ payload }) {
      console.log("📦 Sending request to:", url);
    },
    onResponse({ response }) {
      console.log("✅ Got response:", response);
    },
    onResponseError({ response }) {
      console.error("❌ API Error:", response.status, response._data);
      // 你也可以在這裡加跳轉登出、顯示 toast 等
    },
  });
};
