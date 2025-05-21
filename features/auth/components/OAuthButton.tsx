
import { FC } from "react";
import { KeyRound as DefaultIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "@/services/auth";

interface OAuthButtonProps {
    provider: string;
    label: string;
    Icon?: FC;
    redirectTo?: string;
}

export const OAuthButton = ({ provider, label, Icon = DefaultIcon, redirectTo = "/" }: OAuthButtonProps) => {
    return (
        <div>
            <form
                action={async () => {
                    "use server";
                    await signIn(provider, { redirectTo });
                }}
            >
                <Button type="submit" variant="outline" className="w-full">
                    <Icon />
                    {label}
                </Button>
            </form>
        </div>
    );
};
