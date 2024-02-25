import { useMemo } from "react";

// カスタムフックの定義
export function useBackendUrl() {
  const backendUrl = useMemo(() => process.env.NEXT_PUBLIC_BACKEND_URL, []);

  return backendUrl;
}

export function useFrontendUrl() {
  const frontendUrl = useMemo(() => process.env.NEXT_PUBLIC_FRONTEND_URL, []);

  return frontendUrl;
}
