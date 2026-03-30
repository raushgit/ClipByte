import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows your LAN host to access Next.js dev resources (HMR, fonts).
  // This removes the "Blocked cross-origin request" warnings.
  allowedDevOrigins: ["192.168.56.1", "http://192.168.56.1"],
};

export default nextConfig;
