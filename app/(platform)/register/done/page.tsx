import { Button } from "@/components/ui/button";
import Link from "next/link";

const Done = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-800 p-4">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md dark:bg-gray-900">
        <div className="flex items-center justify-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500" />
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">
          Registration Successful!
        </h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          You have successfully completed the registration process.
        </p>
        <div className="mt-6">
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Done;

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
