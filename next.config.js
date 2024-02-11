/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,

  },
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^electron$/
    }));
    return config
  },
}

module.exports = nextConfig
