import { Toast } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
      <Toaster />
    </ClerkProvider>
  );
};

export default PlatformLayout;
