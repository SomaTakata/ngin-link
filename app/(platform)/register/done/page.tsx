import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AlertUserExists from "../../_component/alert-user-exists";
const Done = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-800 p-4">
      <AlertUserExists />
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md dark:bg-gray-900">
        <div className="flex items-center justify-center">
          <IoMdCheckmarkCircleOutline size={100} className=" text-green-500" />
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">
          Registration Successful!
        </h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          You have successfully completed the registration process.
        </p>
        <div className="mt-6">
          <Button asChild className="w-full mt-4">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Done;
