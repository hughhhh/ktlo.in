module.exports = {
  async redirects() {
    return [
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