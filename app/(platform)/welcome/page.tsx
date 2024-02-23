import Link from "next/link"
import FormNginLinkId from "./_components/form-nginlink-id";

const Welcome = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">NginLink へようこそ！</h1>
        <p className="mt-2 text-sm text-gray-600">URL に使うユーザ名を入力してください</p>
      </div>

      <FormNginLinkId />

      {/* FIXME: 消す or Clerk 改造する */}
      {/* <p className="mt-6 text-sm">
        すでにアカウントをお持ちですか？
        <Link className="text-[#5c4ac7]" href="#">
          ログインする
        </Link>
      </p> */}
    </div>
  )
}

export default Welcome;
