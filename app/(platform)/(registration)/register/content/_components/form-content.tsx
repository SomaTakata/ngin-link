"use client";

import LinkForm from "@/app/(platform)/dashboard/_components/link-form";
import { Button } from "@/components/ui/button";
import { useMutationWithAuth } from "@/hook/fetch-auth";
import { PatchLinksRequest } from "@/types/links-types";
import { PostUsersRequest } from "@/types/users-types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormContent = () => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutationWithAuth<PostUsersRequest>("/users", {
    method: "POST",
  });

  const router = useRouter();

  const platforms = {
    github: "https://github.com/",
    x: "https://twitter.com/",
    zenn: "https://zenn.dev/",
    qiita: "https://qiita.com/",
  };

  const platformsMap = new Map(Object.entries(platforms));

  const onSubmit = (data: Object) => {
    // Object を PatchLinksRequest に変換
    let body: PatchLinksRequest = { social_links: [] };
    Object.entries(data).forEach(([key, value]) => {
      body.social_links.push({
        platform_name: key,
        url: platformsMap.get(key) + value,
      });
    });

    const keys = [
      "ngin_link_id",
      "username",
      "programming_languages",
      "job_role",
    ];

    let values: (string | null)[] = [];

    keys.forEach((key) => {
      values.push(localStorage.getItem(key));
    });

    if (values.includes(null)) {
      alert("全ての情報を入力してください");
      return;
    }

    const postBody: PostUsersRequest = {
      ngin_link_id: values[0] as string,
      username: values[1] as string,
      description: "",
      programming_languages: JSON.parse(values[2] as string),
      job_role: values[3] as string,
      social_links: body.social_links,
    };

    mutate(postBody, () => {
      router.push("/register/done");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3 className="text-lg font-medium mb-2">Replace with your content</h3>
        <div className="space-y-3">
          {Object.keys(platforms).map((platform) => (
            <LinkForm
              key={platform}
              platform={platform}
              formRegister={register}
            />
          ))}
        </div>
      </div>
      <Button type="submit" className="w-full mt-4">
        登録する
      </Button>
    </form>
  );
};

export default FormContent;
