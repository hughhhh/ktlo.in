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
        destination: 'https://mgate.io/go/m9OGvkhbcTjq/',
        permanent: false,
        basePath: false
      },
      {
        source: '/one/register',
        destination: 'https://mgate.io/go/i855nCfTrQ9z/',
        permanent: false,
        basePath: false
      },
    ]
  },
  reactStrictMode: true,
};
