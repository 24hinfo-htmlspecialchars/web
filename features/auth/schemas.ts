import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .email({
            message: "Entrez une adresse email valide.",
        })
        .nonempty({
            message: "L'adresse email est requise.",
        }),
    password: z.string().min(1, {
        message: "Le mot de passe est requis.",
    }),
});

export const registerSchema = z
    .object({
        email: z
            .string()
            .email({
                message: "Entrez une adresse email valide.",
            })
            .nonempty({
                message: "L'adresse email est requise.",
            }),
        password: z
            .string()
            .min(8, {
                message: "Le mot de passe doit contenir au moins 8 caractères.",
            })
            .max(32, {
                message: "Le mot de passe doit contenir au plus 32 caractères.",
            })
            .regex(/[A-Z]/, {
                message: "Le mot de passe doit contenir au moins une majuscule.",
            })
            .regex(/[a-z]/, {
                message: "Le mot de passe doit contenir au moins une minuscule.",
            })
            .regex(/\d/, {
                message: "Le mot de passe doit contenir au moins un chiffre.",
            })
            .regex(/[\W_]/, {
                message: "Le mot de passe doit contenir au moins un caractère spécial.",
            }),
        confirmPassword: z.string().min(1, {
            message: "La confirmation du mot de passe est requise.",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas.",
        path: ["confirmPassword"],
    });
