import React from "react";
import { Button } from "@/components/ui/button";
import { useFrontendUrl } from "@/hook/process-env";
type CopyButtonProps = {
  url?: string;
};
const CopyButton = ({ url }: CopyButtonProps) => {
  const frontUrl = useFrontendUrl();
  if (url === undefined) return;
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`${frontUrl}${url}`);
  };
  return (
    <Button className=" " onClick={() => copyToClipboard()}>
      Copy URL
    </Button>
  );
};

export default CopyButton;
