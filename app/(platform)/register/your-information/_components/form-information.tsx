"use client";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const jobRoles = [
  "フロントエンド",
  "バックエンド",
  "インフラ",
  "DevOps",
  "クラウドエンジニア",
  "データサイエンティスト",
  "ネットワークエンジニア",
  "セキュリティエンジニア",
  "システムアーキテクト",
  "モバイルアプリ開発者",
  "QAエンジニア（品質保証）",
  "UI/UXデザイナー",
  "プロダクトマネージャー PdM",
  "プロジェクトマネージャー PM",
  "ITコンサルタント",
];

const programmingLanguages = [
  "JavaScript",
  "Python",
  "TypeScript",
  "HTML/CSS",
  "SQL",
  "Rust",
  "C#",
  "Bash/Shell (all shells)",
  "Go",
  "Java",
  "C++",
  "Kotlin",
  "C",
  "PHP",
  "PowerShell",
  "Dart",
  "Swift",
  "Ruby",
  "Lua",
  "Elixir",
  "Assembly",
  "Zig",
  "Haskell",
  "R",
  "Scala",
  "Julia",
  "F#",
  "Delphi",
  "Clojure",
  "Lisp",
  "Solidity",
  "GDScript",
  "Erlang",
  "Visual Basic (.Net)",
  "Groovy",
  "MATLAB",
  "Perl",
  "Ocaml",
];

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
          ニックネーム（サイトに表示されます）
        </label>
        <Input id="name" placeholder="やまだ" />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="occupation"
        >
          学校名（表示設定は後から可能です）
        </label>
        <Input id="occupation" placeholder="◯◯大学" />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          プログラミング言語 (3つまで選択)
        </label>
        <div className="flex flex-wrap gap-2 h-[80px] overflow-y-scroll">
          {programmingLanguages.map((language) => (
            <Badge variant="secondary">{language}</Badge>
          ))}
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
