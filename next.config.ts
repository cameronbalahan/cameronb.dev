import { NextConfig } from "next";

export const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
};


import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();