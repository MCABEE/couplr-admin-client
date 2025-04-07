// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.js
// next.config.mjs

import webpack from 'webpack'
import dotenv from 'dotenv'

dotenv.config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
    //   new webpack.EnvironmentPlugin(process.env)
    new webpack.EnvironmentPlugin([
        'NEXT_PUBLIC_LOGIN_URL',
        'NEXT_PUBLIC_API_URL'
      ])
    )
    return config
  }
}

export default nextConfig


