import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      // issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/media/',
            publicPath: '/_next/static/media/',
          },
        },
      ]
    })
    return config;
  }
};

export default withNextIntl(nextConfig);
