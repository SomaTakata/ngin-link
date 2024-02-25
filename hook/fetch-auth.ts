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
    (body: any, after: () => void) => {
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
        .then(() => after())
        .catch(console.error);
    },
    [jwt, input, backendUrl]
  );

  return { response, loading, mutate };
};

export const useFetchWithAuth = <T>(input: string) => {
  const [response, setResponse] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true); // 初期値をtrueに設定
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const { getToken } = useAuth();

  const [jwt, setJwt] = useState<string>();
  const backendUrl = useBackendUrl();

  const refetch = useCallback(() => {
    if (!jwt) {
      setLoading(false); // JWTがない場合はローディングを終了

      return;
    }
    fetch(`${backendUrl}${input}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then((res) => {
        if (res.status === 404) setIsNotFound(true);
        if (res.status === 200) setIsNotFound(false);
        return res.json();
      })
      .then((res) => {
        setResponse(res);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // エラー発生時にもローディングを終了
      });
  }, [jwt, input, backendUrl]);

  useEffect(() => {
    getToken({ template: "LongLongJWT" }).then((token) => {
      if (!token) {
        console.error("No token found");
        setLoading(false); // トークン取得に失敗した場合はローディングを終了
        return;
      }
      setJwt(token);
    });
  }, [getToken]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { response, loading, refetch, isNotFound };
};
