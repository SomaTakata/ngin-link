import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface ErrorPagePrompt {
  input: string | undefined;
  setInput: (e: any) => void;
  frontUrl?: string | undefined;
}

const ErrorPage = ({ input, setInput, frontUrl }: ErrorPagePrompt) => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-[#1a1e2e]">
    <p className="text-center text-xl font-bold text-white">
      このIDのページは存在しません。
    </p>
    <p className="text-center text-xl font-bold text-white mt-2">
      再度IDを確認し入力を行ってください。
    </p>
    <div className="w-full flex items-center justify-center mt-4 ">
      <Input
        className="w-1/2 mr-2"
        placeholder="yamada-taro"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button>
        <Link className="font-bold text-sm" href={`${input}`}>
          ジャンプ
        </Link>
      </Button>
    </div>
  </div>
);
export default ErrorPage;
