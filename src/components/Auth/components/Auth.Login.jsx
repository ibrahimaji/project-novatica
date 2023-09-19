"use client";

import BaseCard from "@/components/shared/BaseCard";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Link from "next/link";

export const AuthLogin = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center md:h-screen lg:py-0">
      <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="mr-3 lucide lucide-cat"
        >
          <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
          <path d="M8 14v.5" />
          <path d="M16 14v.5" />
          <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
        </svg>
        NOVATICA
      </Link>
      <BaseCard className="flex justify-center">
        <div className="w-[20rem] p-6 md:space-y-6 sm:p-8 dark:bg-gray-800 rounded-lg ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
          <form className="space-y-4 md:space-y-6">
          <label for="email" className="block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <Input type="text" placeholder="name@company.com" />
          <label for="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <Input type="password" placeholder="••••••••" />
          <Button variant="primary">Sign in</Button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account yet? <a href="#" className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]">Sign up</a>
          </p>
          </form>
        </div>
      </BaseCard>
    </main>
  );
};
