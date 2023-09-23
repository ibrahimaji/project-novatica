"use client";

import Link from "next/link";
import BaseCard from "@/components/shared/BaseCard";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";

export const AuthLogin = () => {
  return (
    <BaseCard className="flex flex-col justify-center max-w-sm">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form className="space-y-4 md:space-y-6 mt-4">
        <div className="space-y-2">
          <label
            for="email"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <Input type="text" placeholder="name@company.com" />
        </div>
        <div className="space-y-2">
          <label
            for="password"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Button variant="primary">Sign in</Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don't have an account yet?{" "}
          <Link
            href="/register"
            className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]"
          >
            Sign up
          </Link>
        </p>
      </form>
    </BaseCard>
  );
};
