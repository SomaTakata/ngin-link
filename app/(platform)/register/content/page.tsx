import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
            <PocketIcon className="text-purple-500" />
            <Input
              className="flex-grow mx-3"
              defaultValue="https://shogo@x-2e.com"
              placeholder="Portfolio URL"
            />
            <XIcon className="text-gray-500" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
            <YoutubeIcon className="text-red-500" />
            <Input className="flex-grow mx-3" placeholder="YouTube URL" />
            <XIcon className="text-gray-500" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
            <StoreIcon className="text-blue-500" />
            <Input className="flex-grow mx-3" placeholder="Store URL" />
            <XIcon className="text-gray-500" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
            <InstagramIcon className="text-pink-500" />
            <Input
              className="flex-grow mx-3"
              placeholder="Instagram username or URL"
            />
            <XIcon className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Add any other links</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
            <LinkIcon className="text-gray-500" />
            <Input
              className="flex-grow mx-3"
              defaultValue="https://x.com/shogo@x-2e"
              placeholder="x.com"
            />
            <XIcon className="text-gray-500" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded">
            <LinkIcon className="text-gray-500" />
            <Input className="flex-grow mx-3" placeholder="Enter any URL" />
            <XIcon className="text-gray-500" />
          </div>
        </div>
      </div>
      <Button asChild className="w-full">
        <Link href="/register/done">Next</Link>
      </Button>
    </div>
  );
};

export default RegisterContent;

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkIcon(props) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function PocketIcon(props) {
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
      <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
      <polyline points="8 10 12 14 16 10" />
    </svg>
  );
}

function StoreIcon(props) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
