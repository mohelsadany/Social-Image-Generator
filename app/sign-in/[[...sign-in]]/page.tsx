import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black">
            <SignIn />
        </div>
    );
}
