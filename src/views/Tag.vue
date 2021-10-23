<template>
  <div class="tags">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <PostsList :posts="tagPost" />
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
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  components: {
    PostsList,
    Spinner,
  },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();

    const tagPost = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { posts, tagPost, error, load };
  },
};
</script>
<style></style>
