import { useAuth } from "@clerk/nextjs";
import { useCallback, useEffect, useState } from "react";
import { useBackendUrl } from "./process-env";

export const useMutationWithAuth = <T>(
  input: string,
  options?: RequestInit
) => {
  const [response, setResponse] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const { getToken } = useAuth();

  const [jwt, setJwt] = useState<string>();
  const backendUrl = useBackendUrl();

  useEffect(() => {
    getToken({ template: "LongLongJWT" }).then((token) => {
      if (!token) {
        console.error("No token found");
        return;
      }
      setJwt(token);
    });
  }, []);

  const mutate = useCallback(
    (body: any, after?: () => void) => {
      if (!jwt) {
        console.error("No token found");
        return;
      }
      setLoading(true);
      fetch(`${backendUrl}${input}`, {
        headers: { Authorization: `Bearer ${jwt}` },
        body: JSON.stringify(body),
        ...options,
      })
        .then((res) => res.json())
        .then((res) => {
          setResponse(res);
          setLoading(false);
        })
        .then(() => after && after())
        .catch(console.error);
    },
    [jwt, input, backendUrl]
  );

  return { response, loading, mutate };
};

export const useFetchWithAuth = <T>(input: string) => {
  const [response, setResponse] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const { getToken } = useAuth();

  const [jwt, setJwt] = useState<string>();
  const backendUrl = useBackendUrl();

  // 再取得の関数
  const refetch = useCallback(() => {
    if (!jwt) return;
    setLoading(true);
    fetch(`${backendUrl}${input}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setResponse(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [jwt, input, backendUrl]);

  // JWT 取得
  useEffect(() => {
    getToken({ template: "LongLongJWT" }).then((token) => {
      if (!token) {
        console.error("No token found");
        return;
      }
      setJwt(token);
    });
  }, []);

  // JWT 使って fetch する
  useEffect(() => {
    if (!jwt) return;
    refetch();
  }, [jwt]);

  return { response, loading, refetch };
};
