import { signOut } from "@/services/auth";

interface SignOutProps {
    buttonText: string;
}

export const SignOut = ({ buttonText }: SignOutProps) => {
    return (
        <form
            action={async () => {
                "use server";
                await signOut({ redirectTo: "/auth/login" });
            }}
        >
            <button type="submit" className="w-full text-left">
                {buttonText}
            </button>
        </form>
    );
};


