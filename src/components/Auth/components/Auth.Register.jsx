"use client";

import { AppLogo } from "@/components/shared/AppLogo";
import BaseCard from "@/components/shared/BaseCard";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";

export const AuthRegister = () => {
  return (
    <BaseCard className="flex justify-center">
      <div className="w-[20rem] p-6 md:space-y-6 sm:p-8 dark:bg-gray-800 rounded-lg ">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create Account
        </h1>
        <form className="space-y-4 md:space-y-6">
          <label
            for="username"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <Input type="text" placeholder="Username" />
          <label
            for="email"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <Input type="text" placeholder="name@company.com" />
          <label
            for="password"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <Input type="password" placeholder="••••••••" />
          <Button variant="primary">Sign up</Button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Have an account?{" "}
            <a
              href="#"
              className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </BaseCard>
  );
};
