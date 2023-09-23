"use client";
import BaseCard from "@/components/shared/BaseCard";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import Link from "next/link";

export const AuthRegister = () => {
  return (
    <BaseCard className="flex flex-col justify-center max-w-sm">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create Account
      </h1>
      <form className="space-y-4 md:space-y-6 mt-4">
        <div className="space-y-2">
          <label
            for="username"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <Input type="text" placeholder="Username" />
        </div>
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
        <Button variant="primary">Sign up</Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]"
          >
            Sign in
          </Link>
        </p>
      </form>
    </BaseCard>
  );
};
