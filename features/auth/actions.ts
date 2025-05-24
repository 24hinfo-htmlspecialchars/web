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
