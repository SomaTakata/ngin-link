import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Content = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white">
      <h1 className="text-3xl font-bold mb-2">Tell us about yourself</h1>
      <p className="text-gray-500 text-xs mb-4">NginLink をあなたの好みにカスタマイズします</p>
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">
            名前
          </label>
          <Input id="name" placeholder="山田 太郎" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="occupation">
            学校名
          </label>
          <Input id="occupation" placeholder="◯◯大学" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">プログラミング言語 (3つまで選択)</label>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Java</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">JavaScript</Badge>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            現在の業種もしくはなりたい職種 (1つ選択)
          </label>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">フロントエンド</Badge>
            <Badge variant="secondary">バックエンド</Badge>
            <Badge variant="secondary">インフラ</Badge>
            <Badge variant="secondary">DevOps</Badge>
          </div>
        </div>
        <Button asChild className="w-full"><Link href="/register/content">登録</Link></Button>
      </form>
    </div>
  )
}

export default Content;
