<template>
  <section class="container">
      <h1>Nuxt + nuxtent</h1>
      <h2>A minimal demo</h2>
      <ul>
          <li><nuxt-link to="/blog">Blog index</nuxt-link></li>
          <li><nuxt-link to="/blog/roundup-2018-02">Sample blog post</nuxt-link></li>
      </ul>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  async asyncData({ app, route }) {
      var posts =  await app.$content('/').getAll();
      return { posts }
  },
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  max-width: 800px;
  padding: 2rem;
  margin: 3rem auto;
  font-size: 140%;
  line-height: 1.5;
}
h1 {
  margin: 2rem auto;
    font-size: 3rem;
    font-weight: 100;
    line-height: 1.1;
}
</style>
