import { Outlet } from "react-router";
import { AnimatedBackground } from "../components/AnimatedBackground";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <Outlet />
    </div>
  );
}
