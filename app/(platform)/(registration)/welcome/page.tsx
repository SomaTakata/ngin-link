import AlertUserExists from "../../_component/alert-user-exists";
import FormNginLinkId from "./_components/form-nginlink-id";

const Welcome = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-8">
      <AlertUserExists />
      <div className="text-center">
        <h1 className="text-4xl font-bold">NginLink へようこそ！</h1>
        <p className="mt-2 text-sm text-gray-600">
          URL に使うユーザ名を入力してください
        </p>
      </div>

      <FormNginLinkId />
    </div>
  );
};

export default Welcome;
