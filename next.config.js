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
        destination: 'https://mgate.io/go/16sCPOpY_bqj/',
        permanent: false,
        basePath: false
      },
      {
        source: '/one/register',
        destination: 'https://mgate.io/go/HkvoxzW5HgBW/',
        permanent: false,
        basePath: false
      },
    ]
  },
  reactStrictMode: true,
};
