import { Toast } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
};

export default PlatformLayout;
