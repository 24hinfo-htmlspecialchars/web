import { Button } from "@/components/ui/button";
import { RegisterForm } from "@/features/auth/components/forms/registerForm";
import { GithubIcon } from "@/features/auth/components/icons/githubIcon";
import { GoogleIcon } from "@/features/auth/components/icons/googleIcon";
import { OAuthButton } from "@/features/auth/components/OAuthButton";
import Link from "next/link";


export default async function RegisterPage() {
    return (
        <div className="relative flex items-center justify-center">
            <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Créer un Compte</h1>
                    <p className="text-muted-foreground">
                        Créez un compte pour accéder à toutes les fonctionnalités de Reaper AI.
                    </p>
                </div>
                <div className="grid gap-4">
                    <RegisterForm />
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Ou continuer avec
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-1">
                        <OAuthButton
                            provider="google"
                            label="Inscription avec Google"
                            Icon={GoogleIcon}
                            redirectTo="/app"
                        />
                        <OAuthButton
                            provider="github"
                            label="Inscription avec Github"
                            Icon={GithubIcon}
                            redirectTo="/app"
                        />
                    </div>
                </div>
                {/* <div className="text-center text-sm">
                    En continuant, vous acceptez les{" "}
                    <Link href="/legal/terms" className="underline">
                        termes et conditions
                    </Link>{" "}
                    ainsi que la{" "}
                    <Link href="/legal/privacy" className="underline">
                        politique de confidentialité
                    </Link>.
                </div> */}
            </div>
            <Button asChild variant={"ghost"} className="absolute right-4 top-4 md:right-8 md:top-8">
                <Link href="/auth/login">Connexion</Link>
            </Button>
        </div>
    )
}