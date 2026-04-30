export const BASE_PATH =
  process.env.NODE_ENV === "development" ? "" : "/Kanakaraju";

export const asset = (path: string): string => `${BASE_PATH}${path}`;
