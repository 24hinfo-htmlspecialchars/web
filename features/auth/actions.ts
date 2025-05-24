"use server";

import { signIn } from "@/services/auth";
import { createUser, userExists } from "@/services/database";
import { loginSchema, registerSchema } from "./schemas";
import bcryptjs from "bcryptjs";
import { ZodError } from "zod";
import { AuthResponse, LoginData, RegisterData } from "./types";


export async function handleLogin(data: LoginData): Promise<AuthResponse> {
    try {
        const validatedData = loginSchema.parse(data);

        await signIn("credentials", {
            redirect: false,
            email: validatedData.email,
            password: validatedData.password,
        });

        return {
            success: true,
            message: "Connexion réussie.",
        };
    } catch (error) {
        if (error instanceof ZodError) {
            return {
                success: false,
                message: error.errors.map((e) => e.message).join(", "),
            };
        }

        console.error("Erreur lors de la connexion :", error);
        return {
            success: false,
            message: "Email ou mot de passe incorrect.",
        };
    }
}


export async function handleRegister(data: RegisterData): Promise<AuthResponse> {
    try {
        const validatedData = registerSchema.parse(data);

        if (validatedData.password !== validatedData.confirmPassword) {
            return {
                success: false,
                message: "Les mots de passe ne correspondent pas.",
            };
        }

        const emailAlreadyUsed = await userExists(validatedData.email);
        if (emailAlreadyUsed) {
            return {
                success: false,
                message: "Cette adresse email est déjà utilisée.",
            };
        }

        const hashedPassword = await bcryptjs.hash(validatedData.password, 10);

        const userCreated = await createUser({
            email: validatedData.email,
            password: hashedPassword,
        });

        if (!userCreated) {
            return {
                success: false,
                message: "Une erreur est survenue lors de la création de l'utilisateur.",
            };
        }

        return {
            success: true,
            message: "Compte créé avec succès. Veuillez vérifier votre boîte de réception pour activer votre compte.",
        };
    } catch (error) {
        if (error instanceof ZodError) {
            return {
                success: false,
                message: error.errors.map((e) => e.message).join(", "),
            };
        }

        console.error("Erreur lors de l'enregistrement :", error);
        return {
            success: false,
            message: "Une erreur inattendue s'est produite.",
        };



    }
}




 type Place = {
  images: string[];
  name: string;
  rating: number;
  address: string;
};

// Données statiques simulant une base ou API
const popularPlacesData: Place[] = [
  {
    images: ["/images/lyon1.jpg", "/images/lyon2.jpg"],
    name: "Chez Lyon",
    rating: 4.7,
    address: "12 rue de la République, Lyon",
  },
  {
    images: ["/images/paris1.jpg", "/images/paris2.jpg"],
    name: "Le Gourmet Parisien",
    rating: 4.5,
    address: "45 avenue Montaigne, Paris",
  },
];

const allPlacesData: Place[] = [
  ...popularPlacesData,
  {
    images: ["/images/marseille1.jpg"],
    name: "La Mer Bleue",
    rating: 4.3,
    address: "Quai des Belges, Marseille",
  },
  {
    images: ["/images/paris2.jpg"],
    name: "Brasserie Montmartre",
    rating: 4.0,
    address: "8 rue Lepic, Paris",
  },
];

// Fonctions simulant un fetch asynchrone
export async function getPopularPlaces(): Promise<Place[]> {
  // Simule un délai (optionnel)
  return new Promise((resolve) => {
    setTimeout(() => resolve(popularPlacesData), 100);
  });
}

export async function getAllPlaces(): Promise<Place[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(allPlacesData), 100);
  });
}



