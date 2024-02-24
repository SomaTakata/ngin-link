import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PublicUserPage = ({ params }: { params: { userId: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf1e6] p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex items-center justify-between">
          <Avatar>
            <AvatarImage
              alt="Profile picture"
              src="/placeholder.svg?height=40&width=40"
            />
            <AvatarFallback>ST</AvatarFallback>
          </Avatar>
          <MoreHorizontalIcon className="text-gray-500" />
        </div>
        <h1 className="text-center text-2xl font-bold">shogo0x2e</h1>
        <p className="text-center text-sm text-gray-600">
          学生エンジニア | Human Computer Interaction
        </p>
        <div className="space-y-4">
          <Link className="block rounded-lg bg-white p-4 shadow" href="#">
            <div className="flex justify-between">
              <span>Portfolio | きたぴー</span>
              <ExternalLinkIcon className="text-gray-500" />
            </div>
          </Link>
          <Link className="block rounded-lg bg-white p-4 shadow" href="#">
            <div className="flex justify-between">
              <span>Github</span>
              <ExternalLinkIcon className="text-gray-500" />
            </div>
          </Link>
          <Link className="block rounded-lg bg-white p-4 shadow" href="#">
            <div className="flex justify-between">
              <span>Instagram</span>
              <ExternalLinkIcon className="text-gray-500" />
            </div>
          </Link>
          <Link className="block rounded-lg bg-white p-4 shadow" href="#">
            <div className="flex justify-between">
              <span>x.com</span>
              <ExternalLinkIcon className="text-gray-500" />
            </div>
          </Link>
        </div>
        <Button className="mx-auto w-full bg-black text-white">
          Create your NginLink
        </Button>
      </div>
      <p className="mt-6 text-xs text-gray-500">Cookie Preferences</p>
    </div>
  );
};

export default PublicUserPage;

function ExternalLinkIcon(props) {
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

function MoreHorizontalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}
