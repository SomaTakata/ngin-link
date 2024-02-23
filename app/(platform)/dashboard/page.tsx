import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

const Dashboard = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100 p-8">
      <div className="flex justify-between">
        <div className="w-1/2 space-y-6 pr-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">
              Your Linktree is live:{" "}
              <a className="text-blue-600" href="#">
                linktr.ee/SomaTakata
              </a>
            </h1>
            <Button className="bg-purple-600 text-white">Copy URL</Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-4 shadow-sm rounded-md">
              <div className="flex items-center space-x-2">
                <LinkIcon className="text-blue-600" />
                <span>Add 3 links (1/3)</span>
              </div>
              <Switch id="add-links" />
            </div>
            <div className="flex items-center justify-between bg-white p-4 shadow-sm rounded-md">
              <div className="flex items-center space-x-2">
                <PaintbrushIcon className="text-blue-600" />
                <span>Customize your page</span>
              </div>
              <Switch id="customize-page" />
            </div>
          </div>
          <Button className="w-full bg-purple-600 text-white">+ Add link</Button>
          <Checkbox id="add-header" />
          <label className="text-sm font-medium leading-none" htmlFor="add-header">
            Add header
          </label>
          <Link className="block text-blue-600" href="#">
            View archive
          </Link>
          <div className="bg-white p-4 shadow-sm rounded-md">
            <h2 className="font-semibold">SomaTakata (SomaTakata) - GitHub</h2>
            <p className="text-sm text-gray-600">https://github.com/SomaTakata</p>
            <div className="flex items-center justify-end space-x-2 pt-2">
              <FileEditIcon className="text-gray-500" />
              <DeleteIcon className="text-gray-500" />
              <CopyIcon className="text-gray-500" />
              <ViewIcon className="text-gray-500" />
              <LinkIcon className="text-gray-500" />
              <Switch id="toggle-visibility-1" />
            </div>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-md">
            <h2 className="font-semibold">TikTok</h2>
            <p className="text-sm text-gray-600">URL</p>
            <div className="flex items-center justify-end space-x-2 pt-2">
              <FileEditIcon className="text-gray-500" />
              <DeleteIcon className="text-gray-500" />
              <CopyIcon className="text-gray-500" />
              <ViewIcon className="text-gray-500" />
              <LinkIcon className="text-gray-500" />
              <Switch id="toggle-visibility-2" />
            </div>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-md">
            <h2 className="font-semibold">Our website</h2>
            <p className="text-sm text-gray-600">URL</p>
            <div className="flex items-center justify-end space-x-2 pt-2">
              <FileEditIcon className="text-gray-500" />
              <DeleteIcon className="text-gray-500" />
              <CopyIcon className="text-gray-500" />
              <ViewIcon className="text-gray-500" />
              <LinkIcon className="text-gray-500" />
              <Switch id="toggle-visibility-3" />
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <div className="bg-white p-4 shadow-sm rounded-md flex justify-center items-center">
            <div className="w-64 bg-gray-200 p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <Avatar>
                  <AvatarImage alt="@SomaTakata" src="/placeholder.svg?height=100&width=100" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <h2 className="font-bold text-lg mt-2">@SomaTakata</h2>
                <div className="mt-4 w-full bg-white p-2 rounded-md shadow">
                  <p className="text-sm font-semibold">SomaTakata (SomaTakata) - GitHub</p>
                </div>
                <div className="mt-4 w-full bg-white p-2 rounded-md shadow">
                  <p className="text-sm font-semibold">TikTok</p>
                </div>
                <div className="mt-4 w-full bg-white p-2 rounded-md shadow">
                  <p className="text-sm font-semibold">Our website</p>
                </div>
                <div className="mt-6 text-gray-400">Linktree*</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;

function CopyIcon(props) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function FileEditIcon(props) {
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
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
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
  )
}


function PaintbrushIcon(props) {
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
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  )
}


function ViewIcon(props) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}
