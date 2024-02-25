"use client";

import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { isEmailLinkError, useAuth } from "@clerk/nextjs";
import QrModal from "./_components/qr-modal";
import { useFetchWithAuth } from "@/hook/fetch-auth";
import { GetUsersResponse } from "@/types/users-types";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import LinkCard from "./_components/link-card";
import { useFrontendUrl } from "@/hook/process-env";
import LoadingSpinner from "./_components/loading-spinner";
import ErrorPage from "./_components/error-page";

const PublicUserPage = ({ params }: { params: { userId: string } }) => {
  const { isSignedIn, userId } = useAuth();
  const [input, setInput] = useState("");
  const { response, loading, refetch, isNotFound } =
    useFetchWithAuth<GetUsersResponse>(`/links/${params.userId}`);
  const frontUrl = useFrontendUrl();

  if (loading || !response) {
    return <LoadingSpinner />;
  }

  if (isNotFound) {
    return <ErrorPage input={input} setInput={setInput} frontUrl={frontUrl} />;
  }

  const socialLinks = response?.ngin_link?.social_links;
  return (
    <div className="mb-12">
      <QrModal params={params} />
      <div className="flex items-center gap-5 mb-">
        <Avatar
          className={`h-16 w-16 ${response?.profile_image_url.length === 0 ? "bg-[#ffa353]" : ""}`}
        >
          <AvatarImage
            alt="Profile picture"
            src={response?.profile_image_url}
          />
        </Avatar>
        <h1 className="text-center text-2xl font-bold text-white">
          {response?.username}
        </h1>
      </div>

      <p className="text-sm font-bold text-[#e4e8fa8c] ">
        {response?.description}
      </p>
      <div className="w-full flex flex-col gap-2 mt-4 mb-24 ">
        <p className="text-[#f2f4ffcc] text-sm font-bold">
          主な使用言語 :{" "}
          {response?.programming_languages?.join(" | ") || "情報なし"}
        </p>
        <p className="text-[#f2f4ffcc] text-sm font-bold">
          主な職種 : {response?.job_role}
        </p>
      </div>
      <div className="grid md:gap-6 gap-6 md:grid-cols-4 grid-cols-2 ">
        {socialLinks?.map((link) => (
          <LinkCard
            key={link.platform_name}
            platform_name={link.platform_name}
            url={link.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PublicUserPage;
