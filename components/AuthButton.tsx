// AuthButton.tsx (composant serveur)
import { auth } from "@/services/auth";
import { Button } from "./ui/button";

export default async function AuthButton() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <Button>
      {isLoggedIn ? "Déconnexion" : "Connexion"}
    </Button>
  );
}
