"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useFetchWithAuth } from "@/hook/fetch-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AlertUserExists = () => {
  const [hasRegistered, setHasRegistered] = useState(false);
  const { response } = useFetchWithAuth<{ exists: boolean }>("/users/exists");
  const router = useRouter();

  useEffect(() => {
    if (response?.exists === true) {
      setHasRegistered(true);
    }
  }, [response]);
  return (
    <AlertDialog open={hasRegistered}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>おっと！すでに登録済みのようです</AlertDialogTitle>
          <AlertDialogDescription>
            ダッシュボードに移動してください。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            承知
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertUserExists;
