"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

const FormNginLinkId = () => {
  const router = useRouter();

  // react-hook-form での form 送信
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    localStorage.setItem("ngin_link_id", data.ngin_link_id);
    router.push("/register/your-information");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 w-full max-w-md">
          <div className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2">
            <span className="text-gray-500">nginlink.com /</span>
            <input
              className="ml-1 flex-1 border-none bg-transparent text-gray-900 focus:ring-0"
              placeholder="username"
              type="text"
              {...register("ngin_link_id", {
                required: true,
              })}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500 text-center">
            続ける場合は、NginLink の 利用規約に同意したものとみなされます。
          </p>
        </div>
        <Button type="submit" className="mt-4 w-full ">
          Continue
        </Button>
      </form>
    </div>
  );
};

export default FormNginLinkId;
