import { SignIn } from "@clerk/nextjs";

export default async function SignInPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const l = `/${locale}`;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black">
            <SignIn
                signUpUrl={`${l}/sign-up`}
                forceRedirectUrl={`${l}/dashboard`}
                fallbackRedirectUrl={`${l}/dashboard`}
            />
        </div>
    );
}
