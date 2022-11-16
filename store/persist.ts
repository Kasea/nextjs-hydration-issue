import type { RootState } from "./store";

export const loadStore = () => {
  if (typeof window === "undefined") return {};

  const value = sessionStorage.getItem("_reduxStore");
  if (!value) return {};

  return JSON.parse(value);
};

export const saveStore = (store: RootState) => {
  sessionStorage.setItem("_reduxStore", JSON.stringify(store));
};
