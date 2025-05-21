"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { handleLogin } from "../../actions";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginSchema } from "../../schemas";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function LoginForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = form.handleSubmit(
        async (data: z.infer<typeof loginSchema>) => {
            setIsLoading(true);

            const res = await handleLogin(data);

            if (res.success) {
                toast.success(res.message);
                router.push("/");
            } else {
                toast.error(res.message);
            }
            setIsLoading(false);
        }
    );

return (
    <Form {...form}>
        <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="email@domain.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <div className="flex items-center">
                    <FormLabel htmlFor="password">Mot de passe</FormLabel>
                    <Link
                        href="/auth/forgot-password"
                        className="ml-auto inline-block text-sm underline"
                    >
                        Mot de passe oublié?
                    </Link>
                </div> */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormControl>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Veuillez patienter
                    </>
                ) : (
                    "Connexion"
                )}
            </Button>
        </form>
    </Form>
);
}
