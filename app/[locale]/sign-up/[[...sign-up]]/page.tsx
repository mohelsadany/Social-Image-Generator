import { SignUp } from "@clerk/nextjs";

export default async function SignUpPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const l = `/${locale}`;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black">
            <SignUp
                signInUrl={`${l}/sign-in`}
                forceRedirectUrl={`${l}/dashboard`}
                fallbackRedirectUrl={`${l}/dashboard`}
            />
        </div>
    );
}
