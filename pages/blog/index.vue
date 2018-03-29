<template>
  <section class="container">
    <nuxt-link to="/">Home</nuxt-link> /
    Blog
        <h1>Blog posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.permalink">
                <nuxt-link :to="post.permalink">{{ post.linktitle }}</nuxt-link>
            </li>
        </ul>
  </section>
</template>

<script>

export default {
  async asyncData({ app, route }) {
    const posts =  await app.$content('/').getAll();
    return { posts }
  }
}
</script>
