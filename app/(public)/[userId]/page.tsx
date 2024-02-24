"use client";

import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import QRCode from "react-qr-code";
import { useFrontendUrl } from "@/hook/process-env";
import { BsQrCodeScan } from "react-icons/bs";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import QrModal from "./_components/qr-modal";

const PublicUserPage = ({ params }: { params: { userId: string } }) => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex flex-col items-center relative justify-center min-h-screen bg-[#1a1e2e] p-4">
      {isSignedIn ? <QrModal params={params} /> : <></>}
      <div className="md:w-[732px]">
        <div className="flex items-center gap-5 mb-6">
          <Avatar className="h-16 w-16 bg-[#ffa353]">
            <AvatarImage
              alt="Profile picture"
              src="/placeholder.svg?height=40&width=40"
            />
            <AvatarFallback className=""></AvatarFallback>
          </Avatar>
          <h1 className="text-center text-2xl font-bold text-white">
            Soma Takata
          </h1>
        </div>

        <p className="text-sm font-bold text-[#e4e8fa8c] ">
          学生エンジニア
          ああああああああああああああああああああああああああああああああああああああああああああああああああ
        </p>
        <div className="w-full flex flex-col gap-2 mt-4 mb-16 ">
          <p className="text-[#f2f4ffcc] text-sm font-bold">
            主な使用言語 : TypeScript,Go,Next.js
          </p>
          <p className="text-[#f2f4ffcc] text-sm font-bold">
            主な職種 : フロントエンドエンジニア
          </p>
        </div>
        <div className=" gap-12 flex">
          <Link
            href="https://twitter.com/catnose99"
            className="relative flex items-center justify-center rounded-2xl w-[163.75px] h-[163.75px] aspect-square shadow-md bg-custom-gradient"
          >
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 27 27"
                aria-label="Twitter"
                className="w-16 h-16"
              >
                <path
                  fill="white"
                  d="M23.1 8.7v.7c0 8-6.4 14.5-14.4 14.6h-.2C5.7 24 3 23.2.6 21.7c.4 0 .8.1 1.2.1 2.3 0 4.6-.8 6.3-2.1C6 19.6 4 18.2 3.3 16c.3.1.7.1 1 .1.5 0 .9-.1 1.4-.2-2.4-.5-4.1-2.6-4.1-5.1v-.1c.7.4 1.5.6 2.3.7-1.5-1-2.2-2.5-2.2-4.3 0-.9.2-1.8.7-2.6C5 7.8 8.8 9.7 13 9.9c-.1-.4-.1-.8-.1-1.2 0-2.8 2.2-5.2 5.2-5.2 1.5 0 2.8.6 3.8 1.7C23 5 24 4.6 25 4.1c-.4 1.2-1.2 2.1-2.2 2.8 1-.1 2-.4 2.9-.8-.8 1-1.7 1.8-2.6 2.6z"
                ></path>
              </svg>
            </div>
          </Link>
          <Link
            href="https://twitter.com/catnose99"
            className="relative flex items-center justify-center rounded-2xl w-[163.75px] h-[163.75px] aspect-square shadow-md bg-custom-gradient"
          >
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 27 27"
                aria-label="Twitter"
                className="w-16 h-16"
              >
                <path
                  fill="white"
                  d="M23.1 8.7v.7c0 8-6.4 14.5-14.4 14.6h-.2C5.7 24 3 23.2.6 21.7c.4 0 .8.1 1.2.1 2.3 0 4.6-.8 6.3-2.1C6 19.6 4 18.2 3.3 16c.3.1.7.1 1 .1.5 0 .9-.1 1.4-.2-2.4-.5-4.1-2.6-4.1-5.1v-.1c.7.4 1.5.6 2.3.7-1.5-1-2.2-2.5-2.2-4.3 0-.9.2-1.8.7-2.6C5 7.8 8.8 9.7 13 9.9c-.1-.4-.1-.8-.1-1.2 0-2.8 2.2-5.2 5.2-5.2 1.5 0 2.8.6 3.8 1.7C23 5 24 4.6 25 4.1c-.4 1.2-1.2 2.1-2.2 2.8 1-.1 2-.4 2.9-.8-.8 1-1.7 1.8-2.6 2.6z"
                ></path>
              </svg>
            </div>
          </Link>
          <Link
            href="https://twitter.com/catnose99"
            className="relative flex items-center justify-center rounded-2xl w-[163.75px] h-[163.75px] aspect-square shadow-md bg-custom-gradient"
          >
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 27 27"
                aria-label="Twitter"
                className="w-16 h-16"
              >
                <path
                  fill="white"
                  d="M23.1 8.7v.7c0 8-6.4 14.5-14.4 14.6h-.2C5.7 24 3 23.2.6 21.7c.4 0 .8.1 1.2.1 2.3 0 4.6-.8 6.3-2.1C6 19.6 4 18.2 3.3 16c.3.1.7.1 1 .1.5 0 .9-.1 1.4-.2-2.4-.5-4.1-2.6-4.1-5.1v-.1c.7.4 1.5.6 2.3.7-1.5-1-2.2-2.5-2.2-4.3 0-.9.2-1.8.7-2.6C5 7.8 8.8 9.7 13 9.9c-.1-.4-.1-.8-.1-1.2 0-2.8 2.2-5.2 5.2-5.2 1.5 0 2.8.6 3.8 1.7C23 5 24 4.6 25 4.1c-.4 1.2-1.2 2.1-2.2 2.8 1-.1 2-.4 2.9-.8-.8 1-1.7 1.8-2.6 2.6z"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <p className="mt-6 text-xs text-gray-500">Cookie Preferences</p>
    </div>
  );
};

export default PublicUserPage;
