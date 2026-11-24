"use client";
import ApiUserService from "@/services/api_user_service";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface RouteGuardProps {
  children: ReactNode;
  role: "ADMIN" | "CUSTOMER";
}

function RouteGuard({ children, role }: RouteGuardProps) {
  const router = useRouter();
  const allowed =
    ApiUserService.isAuthenticated() && ApiUserService.hadRole(role);

  return <div>{children}</div>;
}

export default RouteGuard;
