import SmsOptInForm from "@/components/SmsOptInForm";

export default function SmsSignupPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <SmsOptInForm />
      </div>
    </div>
  );
}