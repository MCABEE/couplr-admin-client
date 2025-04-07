import dotenv from "dotenv";
import { PHASE_PRODUCTION_BUILD } from "next/constants.js";

const envFile = `env/.env.${process.env.APP_ENV || "local"}`;
dotenv.config({ path: envFile });

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  return {
    reactStrictMode: true,
    compress: true,
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_LOGIN_URL: process.env.NEXT_PUBLIC_LOGIN_URL,
    },
    ...(isProd && {
      eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
    }),
  };
};

export default nextConfig;
