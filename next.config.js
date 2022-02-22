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
        destination: 'https://mgate.io/go/ll8w872C1dy7/',
        permanent: false,
        basePath: false
      },
      {
        source: '/one/register',
        destination: 'https://mgate.io/go/gJq0ERy2EJ0i/',
        permanent: false,
        basePath: false
      },
    ]
  },
  reactStrictMode: true,
};
