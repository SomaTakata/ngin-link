"use client";

import { Button } from "@/components/ui/button";
import LinkForm from "./_components/link-form";
import { useFetchWithAuth } from "@/hook/fetch-auth";
import { GetUsersResponse } from "@/types/users-types";

const Dashboard = () => {
  const { response, loading, refetch } =
    useFetchWithAuth<GetUsersResponse>("/users");

  const handleClick = () => {
    refetch();
  };

  return (
    <div className="min-h-screen w-screen bg-white p-8">
      <div className="flex justify-between">
        <div className="w-1/2 space-y-6 pr-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">
              Your NginLink is live:{" "}
              <a className="text-blue-600" href="/somatakata">
                ngin-link.com/SomaTakata
              </a>
            </h1>
            <Button className=" ">Copy URL</Button>
          </div>
          {loading && <p>Now Loading...</p>}
          {!loading &&
            response &&
            response.NginLink.SocialLinks.map((link) => {
              return (
                <LinkForm
                  key={`${link.PlatformName}${link.URL}`}
                  platform={link.PlatformName}
                  urlTo={link.URL}
                />
              );
            })}
          <Button onClick={handleClick}>再読み込み</Button>
        </div>
        <div className="w-1/2 pl-4">
          <div className="bg-white p-4 shadow-sm rounded-md flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
