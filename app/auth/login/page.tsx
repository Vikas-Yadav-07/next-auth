"use client";
import { Google } from "@/components/icons";
import { Github } from "@/components/icons";
import { Twitter } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

type UserCredentials = {
  email: string;
  password: string;
};

function Login() {
  const [userCreds, setUserCreds] = React.useState<UserCredentials>({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    console.log(userCreds, "User Creds ");
  };

  const handleGoogleSignIn = async () => {
    signIn("google", { callbackUrl: "/"})
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-6xl font-extrabold mb-20 uppercase">Next Auth</p>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-col">
            <Button
              onClick={handleGoogleSignIn}
              className="w-full bg-white border hover:bg-slate-50"
            >
              <Google />
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Google
              </p>
            </Button>
            <Button
              aria-label="Continue with github"
              role="button"
              className="w-full bg-white border hover:bg-slate-50"
            >
              <Github />
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Github
              </p>
            </Button>
            <Button
              aria-label="Continue with twitter"
              role="button"
              className="w-full bg-white border hover:bg-slate-50"
            >
              <Twitter />
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Twitter
              </p>
            </Button>
          </div>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input
                id="name"
                name="email"
                type="email"
                value={userCreds.email}
                onChange={(e) =>
                  setUserCreds({ ...userCreds, email: e.target.value })
                }
                placeholder="Enter email"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input
                id="name"
                name="password"
                type="password"
                value={userCreds.password}
                onChange={(e) =>
                  setUserCreds({ ...userCreds, password: e.target.value })
                }
                placeholder="Enter password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 flex-col justify-between">
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
          <div className="flex items-center justify-start">
            <span>Does not have account?</span>
            <span>
              <Link href="singup">
                <Button variant="link">Sign Up</Button>
              </Link>
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
