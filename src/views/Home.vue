<template>
  <div class="home">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-if="!error && posts.length > 0">
      <PostsList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import Spinner from "../components/Spinner";
import getPosts from "../../composables/getPosts.js";
export default {
  components: { PostsList, Spinner },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.home h1 {
  padding: 35px;
}
</style>
