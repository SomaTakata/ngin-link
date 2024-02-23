import { useMemo } from 'react';

// カスタムフックの定義
export function useBackendUrl() {
  
  const backendUrl = useMemo(() => process.env.REACT_APP_BACKEND_URL, []);

  return backendUrl;
}