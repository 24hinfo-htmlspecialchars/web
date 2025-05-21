"use client";

import { useState } from "react";
import { toast } from "sonner";
import { AuthError } from "../types";

export function getErrorMessage(error: AuthError): string {
    switch (error) {
        case AuthError.OAuthAccountNotLinked:
            return "Ce compte est déjà lié à un autre fournisseur. Veuillez utiliser le bon fournisseur pour vous connecter.";
        case AuthError.AccessDenied:
            return "Vous n'avez pas l'autorisation de vous connecter.";
        case AuthError.InvalidCredentials:
            return "Identifiants incorrects. Veuillez vérifier votre e-mail et votre mot de passe.";
        case AuthError.SessionExpired:
            return "Votre session a expiré. Veuillez vous reconnecter.";
        case AuthError.ProviderNotSupported:
            return "Le fournisseur d'authentification sélectionné n'est pas pris en charge.";
        case AuthError.TooManyRequests:
            return "Trop de tentatives de connexion. Veuillez patienter quelques minutes avant de réessayer.";
        case AuthError.NetworkError:
            return "Une erreur réseau est survenue. Vérifiez votre connexion Internet et réessayez.";
        case AuthError.OAuthCallbackError:
            return "Une erreur est survenue lors de la connexion avec le fournisseur d'authentification. Veuillez réessayer.";
        default:
            return "Une erreur inconnue est survenue. Veuillez réessayer.";
    }
}

export const ErrorHandler = ({
    error,
}: {
    error: AuthError | null | undefined;
}) => {
    const [hasToasted, setHasToasted] = useState(false);
    if (error && !hasToasted) {
        toast.error("Erreur de connexion", {
            description: getErrorMessage(error),
        });
        setHasToasted(true);
    }

    return null;
};
