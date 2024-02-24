import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="flex flex-col items-center relative justify-center min-h-screen bg-[#1a1e2e] p-8">
        {children}
      </div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
