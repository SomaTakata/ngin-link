import Link from "next/link";
import { BsGithub } from "react-icons/bs";

import { SiZenn, SiQiita } from "react-icons/si";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

interface SocialLink {
  platform_name: string;
  url: string;
}

const LinkCard = ({ platform_name, url }: SocialLink) => {
  console.log(platform_name);
  const getIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <BsGithub className="h-14 w-14 " />;
      case "x":
        return <FaXTwitter className="h-12 w-12 text-white" />;
      case "zenn":
        return <SiZenn className="h-12 w-12 text-blue-400" />;
      case "qiita":
        return <SiQiita className="h-20 w-20 text-white" />;
      case "personal":
        return <IoPersonCircleSharp className="h-20 w-20 text-white" />;

      default:
        return;
    }
  };
  const getPlatformClass = (platform_name: string) => {
    switch (platform_name) {
      case "github":
        return "bg-c-github";
      case "x":
        return "bg-c-x";

      case "zenn":
        return "bg-c-zenn";

      case "qiita":
        return "bg-c-qiita";
      case "personal":
        return "bg-c-person";

      default:
        return "";
    }
  };

  const getPlatformUrl = ({ platform_name, url }: SocialLink): string => {
    switch (platform_name) {
      case `github`:
        return `https://github.com/${url}`;
      case "x":
        return `https://twitter.com/${url}`;

      case "zenn":
        return `https://zenn.dev/${url}`;

      case "qiita":
        return `https://qiita.com/${url}`;
      case "personal":
        return `${url}`;

      default:
        return "";
    }
  };

  return (
    <Link
      href={getPlatformUrl({ platform_name, url })}
      className={`relative flex items-center justify-center rounded-2xl md:w-[163.75px] md:h-[163.75px] w-[150px] h-[150px] aspect-square ${getPlatformClass(platform_name)}`}
    >
      <div className="flex items-center justify-center">
        {getIcon(platform_name)}
      </div>
    </Link>
  );
};

export default LinkCard;
