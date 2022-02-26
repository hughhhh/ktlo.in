module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://mirror.xyz/hughmiles.eth/PCTWxkJ5goOS0bRVG-UqDTglPxyhBKGDoPKiKCL6JN4',
        permanent: false,
        basePath: false
      },
      {
        source: '/one',
        destination: 'https://mgate.io/go/gqVai3vxaamR/',
        permanent: false,
        basePath: false
      },
      {
        source: '/one/register',
        destination: 'https://mgate.io/go/bru1103WzQu2/',
        permanent: false,
        basePath: false
      },
    ]
  },
  reactStrictMode: true,
};
