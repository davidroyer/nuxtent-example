<template>
<section class="container">
    <nuxt-link to="/">Home</nuxt-link> /
    <nuxt-link to="/blog">Blog</nuxt-link> /
    {{ post.linktitle }}
  <h1 class="post-title">{{ post.title }} </h1>
  <nuxtent-body :body="post.body" />
</section>
</template>

<script>
export default {
  async asyncData({ app, route, payload }) {
    return { post: (await app.$content("/").get(route.path)) || payload };
  }
  // asyncData: async ({ app, params, payload, route }) => ({
  //   post: await app.$content('/blog').get(params.slug) || payload,
  //   url: `https://www.davidroyer.me${route.fullPath}`
  // }),
};
</script>
