"use client";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormInformation = () => {
  const router = useRouter();

  // form 送信時
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/content");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="name"
        >
          ニックネーム（ ※サイトに表示されます ）
        </label>
        <Input id="name" placeholder="やまだ" />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="occupation"
        >
          学校名（ 後で表示非表示設定可能 ）
        </label>
        <Input id="occupation" placeholder="◯◯大学" />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          プログラミング言語 (3つまで選択)
        </label>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Java</Badge>
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">JavaScript</Badge>
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          現在の業種もしくはなりたい職種 (1つ選択)
        </label>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">フロントエンド</Badge>
          <Badge variant="secondary">バックエンド</Badge>
          <Badge variant="secondary">インフラ</Badge>
          <Badge variant="secondary">DevOps</Badge>
        </div>
      </div>
      <Button asChild className="w-full">
        <Link href="/register/content">登録</Link>
      </Button>
    </form>
  );
};

export default FormInformation;
