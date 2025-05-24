import { prisma } from "../prisma/prisma";
import bcryptjs from 'bcryptjs';

export async function userExists(email: string): Promise<boolean> {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        });
        return user !== null;
    } catch (error) {
        console.error("Error checking if user exists:", error);
        return false;
    }
}

export async function getUserByEmail(email: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        });
        if (!user) {
            console.error("User not found");
            return null;
        }
        return user;
    } catch (error) {
        console.error("Error getting user by email:", error);
        return null;
    }
}

export async function getUserById(id: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: id,
            }
        });
        if (!user) {
            console.error("User not found");
            return null;
        }
        return user;
    } catch (error) {
        console.error("Error getting user by ID:", error);
        return null;
    }
}

export async function createUser(data: { email: string; password: string }) {
    try {
        const existingUser = await userExists(data.email);
        if (existingUser) {
            console.error("User already exists");
            return null;
        }
        return await prisma.user.create({
            data: {
                email: data.email,
                password: data.password,
                userTypeId: await prisma.userType.findFirst({
                    where: {
                        label: "user",
                    }
                }).then((type: { id: string } | null) => type?.id)
            }
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return null;
    }
}

export async function getUserFromDb(email: string, password: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        });
        if (!user) {
            console.error("User not found");
            return null;
        }

        if (!user.password) {
            console.error("User has no password");
            return null;
        }

        const passwordMatch = await bcryptjs.compare(password, user.password);
        if (!passwordMatch) {
            console.error("Invalid password");
            return null;
        }

        return user;
    } catch (error) {
        console.error("Error getting user from DB:", error);
        return null;
    }
}

export async function getPlacesFromDb() {
    try {
        const places = await prisma.places.findMany();
        if (!places) {
            console.error("No places found");
            return null;
        }
        return places;
    } catch (error) {
        console.error("Error getting places from DB:", error);
        return null;
    }
}