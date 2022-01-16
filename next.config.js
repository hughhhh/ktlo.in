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
        destination: 'https://0xhugh.mintgate.io/go/3SwzVDqtVyGI/',
        permanent: false,
        basePath: false
      },
    ]
  },
  reactStrictMode: true,
};