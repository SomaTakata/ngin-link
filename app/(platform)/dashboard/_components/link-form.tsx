"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { XIcon } from "lucide-react";
import { SiZenn, SiQiita } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { Switch } from "@/components/ui/switch";

// propsの型定義
interface LinkFormProps {
  platform: string;
  urlTo: string;
}

function LinkForm({ platform, urlTo }: LinkFormProps) {
  const [url, setUrl] = useState(urlTo);

  let IconComponent;
  let iconColor = "";
  let placeHolderUrl = "";

  // platformの値に応じてアイコンと色を設定
  switch (platform) {
    case "zenn":
      IconComponent = SiZenn;
      iconColor = "text-blue-500";
      placeHolderUrl = "https://zenn.dev/";
      break;
    case "qiita":
      IconComponent = SiQiita;
      iconColor = "text-green-500";
      placeHolderUrl = "https://qiita.com/";
      break;
    case "twitter":
      IconComponent = FaXTwitter;
      iconColor = "text-black";
      placeHolderUrl = "https://twitter.com/";
      break;
    case "github":
      IconComponent = BsGithub;
      iconColor = "text-black";
      placeHolderUrl = "https://github.com/";
      break;
    default:
      IconComponent = XIcon;
      iconColor = "text-black";
  }

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
      <IconComponent className={iconColor} size={22} />
      <Input
        className="flex-grow mx-2"
        placeholder={placeHolderUrl}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  );
}

export default LinkForm;
