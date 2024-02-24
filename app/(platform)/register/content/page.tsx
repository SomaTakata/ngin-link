import { Button } from "@/components/ui/button";
import Link from "next/link";
import LinkForm from "./_components/linkForm";

const RegisterContent = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Let&apos;s make it yours</h2>
      <p className="text-sm text-gray-600 mb-6">
        Add your own content below. You can also further customise your links
        and appearance later.
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Replace with your content</h3>
        <div className="space-y-3">
          <LinkForm platform="github" />
          <LinkForm platform="twitter" />
          <LinkForm platform="zenn" />
          <LinkForm platform="qiita" />
        </div>
      </div>
      <Button asChild className="w-full mt-4">
        <Link href="/register/done">Next</Link>
      </Button>
    </div>
  );
};

export default RegisterContent;
