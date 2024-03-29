import AlertUserExists from "../../../_component/alert-user-exists";
import FormInformation from "./_components/form-information";

const Content = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white">
      <AlertUserExists />
      <h1 className="text-3xl font-bold mt-10 mb-2">Tell us about yourself</h1>
      <p className="text-gray-500 text-xs mb-4">
        NginLink をあなたの好みにカスタマイズします
      </p>

      <FormInformation />
    </div>
  );
};

export default Content;
