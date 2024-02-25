import AlertUserExists from "../../../_component/alert-user-exists";
import FormContent from "./_components/form-content";

const RegisterContent = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow">
      <AlertUserExists />
      <h2 className="text-2xl font-semibold mb-4">Let&apos;s make it yours</h2>
      <p className="text-sm text-gray-600 mb-6">
        Add your own content below. You can also further customise your links
        and appearance later.
      </p>
      <FormContent />
    </div>
  );
};

export default RegisterContent;
