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
  // api: {
  //   baseURL: 'http://localhost:3000',
  //   browserBaseURL: 'http://nuxtent-example.netlify.com'
  // },



  api: function(isStatic) {
    return {
      baseURL: 'http://localhost:3000',
      browserBaseURL: isStatic ? 'http://nuxtent-example.netlify.com' : ''
    }
  }
}
