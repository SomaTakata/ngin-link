"use client";

import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import QRCode from "react-qr-code";
import { useFrontendUrl } from "@/hook/process-env";
import { BsGithub, BsQrCodeScan } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import QrModal from "./_components/qr-modal";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { SiZenn, SiQiita } from "react-icons/si";

const PublicUserPage = ({ params }: { params: { userId: string } }) => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex flex-col items-center relative justify-center min-h-screen bg-[#1a1e2e] p-8">
      {isSignedIn ? <QrModal params={params} /> : <></>}
      <div className="md:w-[732px] ">
        <div className="flex items-center gap-5 mb-6">
          <Avatar className="h-16 w-16 bg-[#ffa353]">
            <AvatarImage
              alt="Profile picture"
              src="/placeholder.svg?height=40&width=40"
            />
          </Avatar>
          <h1 className="text-center text-2xl font-bold text-white">
            Soma Takata
          </h1>
        </div>

        <p className="text-sm font-bold text-[#e4e8fa8c] ">
          学生エンジニア
          ああああああああああああああああああああああああああああああああああああああああああああああああああ
        </p>
        <div className="w-full flex flex-col gap-2 mt-4 mb-24 ">
          <p className="text-[#f2f4ffcc] text-sm font-bold">
            主な使用言語 : TypeScript,Go,Next.js
          </p>
          <p className="text-[#f2f4ffcc] text-sm font-bold">
            主な職種 : フロントエンドエンジニア
          </p>
        </div>
        <div className="grid md:gap-6 gap-6 md:grid-cols-4 grid-cols-2 ">
          <Link
            href="https://twitter.com/catnose99"
            className="relative flex items-center justify-center rounded-2xl md:w-[163.75px] md:h-[163.75px] w-[150px] h-[150px] aspect-square  bg-c-github "
          >
            <div className="flex items-center justify-center">
              <BsGithub className="h-14 w-14" />
            </div>
          </Link>
          <Link
            href="https://twitter.com/catnose99"
            className="relative flex items-center justify-center rounded-2xl md:w-[163.75px] md:h-[163.75px] w-[150px] h-[150px] aspect-square bg-c-x"
          >
            <div className="flex items-center justify-center">
              <FaXTwitter className="h-12 w-12 text-white" />
            </div>
          </Link>
          <Link
            href="https://zenn.dev/catnose99"
            className="relative flex items-center justify-center rounded-2xl md:w-[163.75px] md:h-[163.75px] w-[150px] h-[150px] aspect-square 
             bg-c-zenn "
          >
            <div className="flex items-center justify-center">
              <SiZenn className="h-12 w-12 text-blue-400" />
            </div>
          </Link>
          <Link
            href="https://twitter.com/catnose99"
            className="relative flex items-center justify-center rounded-2xl md:w-[163.75px] md:h-[163.75px] w-[150px] h-[150px] aspect-square  bg-c-qiita"
          >
            <div className="flex items-center justify-center">
              <SiQiita className="h-20 w-20 text-white" />
            </div>
          </Link>
          <Link
            href="https://twitter.com/catnose99"
            className="relative flex items-center justify-center rounded-2xl md:w-[163.75px] md:h-[163.75px] w-[150px] h-[150px] aspect-square bg-c-person"
          >
            <div className="flex items-center justify-center">
              <IoPersonCircleSharp className="h-20 w-20 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicUserPage;
