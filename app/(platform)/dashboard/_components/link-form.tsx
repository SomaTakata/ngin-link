import React from "react";
import { Input } from "@/components/ui/input";
import { XIcon } from "lucide-react";
import { SiZenn, SiQiita } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { url } from "inspector";
import { Switch } from "@/components/ui/switch";

// propsの型定義
interface LinkFormProps {
  platform: "zenn" | "qiita" | "twitter" | "github";
}

function LinkForm({ platform }: LinkFormProps) {
  let IconComponent;
  let iconColor = "";
  let url = "";

  // platformの値に応じてアイコンと色を設定
  switch (platform) {
    case "zenn":
      IconComponent = SiZenn;
      iconColor = "text-blue-500";
      url = "https://zenn.dev/";
      break;
    case "qiita":
      IconComponent = SiQiita;
      iconColor = "text-green-500";
      url = "https://qiita.com/";
      break;
    case "twitter":
      IconComponent = FaXTwitter;
      iconColor = "text-black";
      url = "https://twitter.com/";
      break;
    case "github":
      IconComponent = FaGithub;
      iconColor = "text-black";
      url = "https://github.com/";
      break;
    default:
      IconComponent = XIcon;
      iconColor = "text-black";
  }

  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
      <IconComponent className={iconColor} size={22} />
      <Input className="flex-grow mx-2" placeholder={url} />
      <XIcon className="text-gray-500" />
      <Switch className="ml-6" />
    </div>
  );
}

export default LinkForm;
