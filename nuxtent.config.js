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
    baseURL: process.env.NODE_ENV === 'production'
            ? 'http://nuxtent-example.netlify.com'
            : 'http://localhost:3000',
    browserBaseURL: process.env.NODE_ENV === 'production'
            ? 'http://nuxtent-example.netlify.com'
            : 'http://localhost:3000'
  }



  // api: function(isStatic) {
  //   return {
  //     baseURL:
  //       process.env.NODE_ENV === 'production'
  //         ? 'http://nuxtent-example.netlify.com'
  //         : 'http://localhost:3000',
  //     browserBaseURL: isStatic ? 'http://nuxtent-example.netlify.com' : ''
  //   }
  // }
}
