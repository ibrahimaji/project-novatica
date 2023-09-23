import { AppLogo } from "@/components/shared/AppLogo";

export const AuthLayout = ({ children }) => {
  return (
    <main className="flex h-screen flex-col items-center justify-center md:h-screen lg:py-0 bg-zinc-100">
      <AppLogo />
      {children}
    </main>
  );
};
