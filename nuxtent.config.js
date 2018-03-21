module.exports = {
  content: {
    page: '/blog/_post',
    permalink: '/blog/:slug',
    isPost: true,
    anchorLevel: 4,
    generate: [
        'get',
        'getAll'
    ]
  },
  api: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://nuxtent.now.sh'
        : 'http://localhost:3000'
  }
}
