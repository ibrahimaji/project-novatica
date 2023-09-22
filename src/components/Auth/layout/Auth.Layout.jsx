import { AppLogo } from "@/components/shared/AppLogo";
import { AuthLogin } from "../components/Auth.Login";

export const AuthLayout = ({ children }) => {
  return (
    <main className="flex h-screen flex-col items-center justify-center md:h-screen lg:py-0">
      <AppLogo />
      {children}
    </main>
  );
};
