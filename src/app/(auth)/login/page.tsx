import LoginForm from "@/components/login-form";

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-green-800">F</span>reely
          </h1>
          <p>Sign in to your freelance dashboard</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
