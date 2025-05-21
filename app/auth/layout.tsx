import { BackgroundSection } from "@/features/auth/components/ui/backgroundSection";

export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
            {children}
            <BackgroundSection />
        </div>
    )
}
