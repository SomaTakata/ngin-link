"use client";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

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

  const { register, handleSubmit } = useForm();

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedJobRole, setSelectedJobRole] = useState<string>("");

  // form 送信時
  const onSubmit = (data: any) => {
    if (selectedLanguages.length === 0) {
      alert("プログラミング言語を選択してください");
      return;
    }

    if (selectedJobRole === "") {
      alert("業種もしくは職種を選択してください");
      return;
    }

    localStorage.setItem(
      "programming_languages",
      JSON.stringify(selectedLanguages)
    );
    localStorage.setItem("job_role", selectedJobRole);
    localStorage.setItem("username", data.username);
    router.push("/register/content");
  };

  const toggleLanguageSelection = (language: string) => {
    setSelectedLanguages((currentSelected) => {
      if (currentSelected.includes(language)) {
        // すでに存在していたら消す
        return currentSelected.filter((lang) => lang !== language);
      } else {
        // 3 つすでに選ばれていたら、一番古いものを消して新しいものを追加
        return currentSelected.length < 3
          ? [...currentSelected, language]
          : [...currentSelected.slice(1), language];
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          ニックネーム（サイトに表示されます）
        </label>
        <Input
          id="name"
          placeholder="やまだ"
          {...register("username", { required: true })}
        />
      </div>
      <div className="mb-10">
        <label className="block mb-4 text-sm font-medium text-gray-900">
          プログラミング言語 (3つまで選択)
        </label>
        <div className="flex flex-wrap gap-2 h-[150px] overflow-y-scroll">
          {programmingLanguages.map((language) => (
            <Badge
              key={language}
              variant="interactable"
              onClick={() => toggleLanguageSelection(language)}
              selected={selectedLanguages.includes(language)}
            >
              {language}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <label className="block mb-4 text-sm font-medium text-gray-900">
          現在の業種もしくはなりたい職種 (1つ選択)
        </label>
        <div className="flex flex-wrap gap-2 h-[120px] overflow-y-scroll">
          {jobRoles.map((role) => (
            <Badge
              key={role}
              variant="interactable"
              onClick={() => setSelectedJobRole(role)}
              selected={role === selectedJobRole}
            >
              {role}
            </Badge>
          ))}
        </div>
      </div>
      <Button type="submit" className="w-full">
        次へ
      </Button>
    </form>
  );
};

export default FormInformation;
