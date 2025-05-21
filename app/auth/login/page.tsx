import { Button } from "@/components/ui/button";
import { ErrorHandler } from "@/features/auth/components/errorHandler";
import { LoginForm } from "@/features/auth/components/forms/loginForm";
import { GithubIcon } from "@/features/auth/components/icons/githubIcon";
import { OAuthButton } from "@/features/auth/components/OAuthButton";
import { AuthError } from "@/features/auth/types";
import Link from "next/link";


interface Props {
  searchParams: {
    error?: AuthError;
  };
}

export default function LoginPage({ searchParams }: Props) {
  const error = searchParams?.error ?? null;

  return (
    <div className="relative flex items-center justify-center">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Connexion</h1>
          <p className="text-muted-foreground">
            Utilisez l&apos;une des options ci-dessous pour vous connecter à
            votre compte.
          </p>
        </div>
        <div className="grid gap-4">
          <LoginForm />
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
              provider="github"
              label="Connexion avec Github"
              Icon={GithubIcon}
              redirectTo="/"
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
        <Link href="/auth/register">Créer un compte</Link>
      </Button>
      <ErrorHandler error={error} />
    </div>
  );
}
