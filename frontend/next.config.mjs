

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, { isServer }) => {
  //   // Ignorar 'fs' si se está compilando para el lado del cliente
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false
  //     };
  //   }

  //   // Añadir regla para manejar archivos HTML
  //   // config.module.rules.push({
  //   //   test: /\.html$/,
  //   //   use: 'html-loader',
  //   // });

  //   return config;
  // },
   
  };



export default nextConfig;
