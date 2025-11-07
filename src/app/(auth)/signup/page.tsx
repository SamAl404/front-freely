import SignUpForm from "@/components/signup-form";


export default function SignUp() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-green-800">F</span>reely
          </h1>
          <p>Create your freelance account</p>
        </div>
        <SignUpForm/>
        
      </div>
    </div>
  );
}
