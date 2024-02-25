"use client";

import { Button } from "@/components/ui/button";
import LinkForm from "./_components/link-form";
import { useFetchWithAuth, useMutationWithAuth } from "@/hook/fetch-auth";
import { GetUsersResponse } from "@/types/users-types";
import { PatchLinksRequest, PatchLinksResponse } from "@/types/links-types";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { response, loading, refetch } =
    useFetchWithAuth<GetUsersResponse>("/users");

  const { mutate } = useMutationWithAuth<PatchLinksResponse>("/links", {
    method: "PATCH",
  });

  const { toast } = useToast();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Object) => {
    // Object を PatchLinksRequest に変換
    let body: PatchLinksRequest = { social_links: [] };
    Object.entries(data).forEach(([key, value]) => {
      body.social_links.push({ platform_name: key, url: value });
    });

    // バックエンドに PATCH して、refetch
    mutate(body, () => {
      refetch();
      // toast({
      //   title: "URL を保存しました！",
      // });
    });
  };

  return (
    <div className="h-screen w-screen bg-white p-8">
      <div className="flex justify-center items-center">
        <form
          className="w-1/2 space-y-6 pr-4"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">
              Your NginLink is live:
              <a className="text-blue-600" href="/somatakata">
                ngin-link.com/SomaTakata
              </a>
            </h1>
            <Button className=" ">Copy URL</Button>
          </div>
          {loading && <p>Now Loading...</p>}
          {!loading &&
            response &&
            response.ngin_link.social_links.map((link) => {
              return (
                <LinkForm
                  key={`${link.platform_name}${link.url}`}
                  platform={link.platform_name}
                  urlTo={link.url}
                  formRegister={register}
                />
              );
            })}
          <div className="flex justify-center">
            <Button type="submit">保存</Button>
          </div>
        </form>
        {/* <div className="w-1/2 pl-4">
          <div className="bg-white p-4 shadow-sm rounded-md flex justify-center items-center"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
