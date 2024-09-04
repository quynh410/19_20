"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function Dashboard() {
  const userInfo = useAuth();
  const router = useRouter();
  console.log("User Info", userInfo);
  // Kiem tra user da dang nhap chua
  //   if (userInfo.isSignedIn) {
  //     return <>Được di vao trang Dashboard</>;
  //   } else {
  //     // Chưa đăng nhập
  //     router.push("/sign-in");
  //   }
  return <>{userInfo.isSignedIn ? <UserButton /> : router.push("/sign-in")}</>;
}
